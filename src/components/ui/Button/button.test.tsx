import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from './Button'

describe('Button component', () => {
  it('renders the button with provided text', () => {
    render(<Button>Click Me</Button>)
    const btn = screen.getByRole('button', { name: /click me/i })
    expect(btn).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Click Me</Button>)

    await userEvent.click(screen.getByRole('button', { name: /click me/i }))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('applies the custom styles', () => {
    render(<Button>Click Me</Button>)
    const btn = screen.getByRole('button', { name: /click me/i })
    expect(btn).toHaveStyle('border-radius: 12px')
    expect(btn).toHaveStyle('max-width: 200px')
  })

  it('renders as disabled when disabled prop is true', () => {
    render(<Button disabled>Click Me</Button>)
    const btn = screen.getByRole('button', { name: /click me/i })
    expect(btn).toBeDisabled()
  })
})
