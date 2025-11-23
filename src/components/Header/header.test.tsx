import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { Header } from './Header'

describe('Header component', () => {
  const renderWithRouter = (ui: React.ReactElement) =>
    render(<BrowserRouter>{ui}</BrowserRouter>)

  it('renders the title', () => {
    renderWithRouter(<Header />)
    expect(
      screen.getByRole('heading', { name: /pokemon explorer/i })
    ).toBeInTheDocument()
  })

  it('renders all navigation links', () => {
    renderWithRouter(<Header />)
    const links = ['Home', 'Table View', 'Favorites']
    links.forEach((text) => {
      expect(
        screen.getByRole('link', { name: new RegExp(text, 'i') })
      ).toBeInTheDocument()
    })
  })

  it('links point to correct paths', () => {
    renderWithRouter(<Header />)
    expect(screen.getByRole('link', { name: /home/i })).toHaveAttribute(
      'href',
      '/'
    )
    expect(screen.getByRole('link', { name: /table view/i })).toHaveAttribute(
      'href',
      '/?view=Table'
    )
    expect(screen.getByRole('link', { name: /favorites/i })).toHaveAttribute(
      'href',
      '/favorites'
    )
  })
})
