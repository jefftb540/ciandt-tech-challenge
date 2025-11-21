import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { MenuItem } from './MenuItem'

describe('MenuItem', () => {
  it('should render menu item with label', () => {
    render(<MenuItem children="Home" />)
    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('should call onClick handler when clicked', async () => {
    const handleClick = jest.fn()
    render(<MenuItem children="Profile" onClick={handleClick} />)

    await userEvent.click(screen.getByText('Profile'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('should be disabled when disabled prop is true', () => {
    render(<MenuItem children="Logout" disabled={true} />)
    expect(screen.getByRole('menuitem')).toHaveAttribute(
      'aria-disabled',
      'true'
    )
  })

  it('should not call onClick when disabled', async () => {
    const handleClick = jest.fn()
    render(<MenuItem children="Delete" disabled={true} onClick={handleClick} />)

    const item = screen.getByRole('menuitem', { name: /delete/i })

    expect(item).toHaveAttribute('aria-disabled', 'true')

    await expect(userEvent.click(item)).rejects.toThrow()
    expect(handleClick).not.toHaveBeenCalled()
  })
})
