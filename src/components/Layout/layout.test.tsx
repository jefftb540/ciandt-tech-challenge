import React from 'react'
import { render, screen } from '@testing-library/react'
import { createMemoryRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout'

jest.mock('../Header/Header', () => ({
  Header: () => <div data-testid="header">Header</div>,
}))

jest.mock('../Footer/Footer', () => ({
  Footer: () => <div data-testid="footer">Footer</div>,
}))

describe('Layout', () => {
  function setup(initialPath = '/') {
    const routes = [
      {
        path: '/',
        element: <Layout />,
        children: [
          {
            index: true,
            element: <div data-testid="outlet">Outlet Content</div>,
          },
        ],
      },
    ]

    const router = createMemoryRouter(routes, { initialEntries: [initialPath] })

    render(<RouterProvider router={router} />)
  }

  it('should render Header', () => {
    setup()
    expect(screen.getByTestId('header')).toBeInTheDocument()
  })

  it('should render Outlet content', () => {
    setup()
    expect(screen.getByTestId('outlet')).toBeInTheDocument()
  })

  it('should render Footer', () => {
    setup()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
  })
})
