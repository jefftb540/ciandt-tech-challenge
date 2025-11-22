import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { Footer } from './Footer'

describe('Footer', () => {
  const renderWithRouter = (ui: React.ReactNode) =>
    render(<MemoryRouter>{ui}</MemoryRouter>)

  it('renders the footer text', () => {
    renderWithRouter(<Footer />)
    expect(screen.getByText(/developed by/i)).toBeInTheDocument()
  })

  it('renders the author link', () => {
    renderWithRouter(<Footer />)
    const link = screen.getByRole('link', { name: /jefferson lima/i })
    expect(link).toBeInTheDocument()
  })

  it('renders the correct href', () => {
    renderWithRouter(<Footer />)
    const link = screen.getByRole('link', { name: /jefferson lima/i })
    expect(link).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/jeffersonferreiralima/'
    )
  })

  it('opens link in a new tab', () => {
    renderWithRouter(<Footer />)
    const link = screen.getByRole('link', { name: /jefferson lima/i })
    expect(link).toHaveAttribute('target', '_blank')
  })
})
