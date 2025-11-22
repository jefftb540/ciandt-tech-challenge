import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom'
import { Link } from './Link'

describe('Link component', () => {
  const renderWithRouter = (ui: React.ReactNode) =>
    render(<MemoryRouter>{ui}</MemoryRouter>)

  it('renders the link with correct text', () => {
    renderWithRouter(<Link to="/test">Click Me</Link>)
    const link = screen.getByRole('link', { name: /click me/i })
    expect(link).toBeInTheDocument()
  })

  it('has the correct href', () => {
    renderWithRouter(<Link to="/test">Click Me</Link>)
    const link = screen.getByRole('link', { name: /click me/i })
    expect(link).toHaveAttribute('href', '/test')
  })

  it('calls onClick handler when clicked', async () => {
    const handleClick = jest.fn()
    renderWithRouter(
      <Link to="/test" onClick={handleClick}>
        Click Me
      </Link>
    )
    const link = screen.getByRole('link', { name: /click me/i })
    await userEvent.click(link)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies the custom styles', () => {
    renderWithRouter(<Link to="/test">Click Me</Link>)
    const link = screen.getByRole('link', { name: /click me/i })
    expect(link).toHaveStyle('text-decoration: none')
    expect(link).toHaveStyle('font-weight: 500')
  })
})
