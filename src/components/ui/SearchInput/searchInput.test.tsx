import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SearchInput } from './SearchInput'

describe('SearchInput', () => {
  it('renders input element', () => {
    render(<SearchInput onChange={() => {}} />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('calls onChange when input value changes', async () => {
    const handleChange = jest.fn()
    render(<SearchInput onChange={handleChange} />)
    const input = screen.getByRole('textbox')

    await userEvent.type(input, 'test')
    expect(handleChange).toHaveBeenCalled()
  })

  it('displays placeholder text', () => {
    const placeholder = 'Search...'
    render(<SearchInput onChange={() => {}} placeholder={placeholder} />)
    expect(screen.getByPlaceholderText(placeholder)).toBeInTheDocument()
  })

  it('applies disabled state', () => {
    render(<SearchInput onChange={() => {}} disabled />)
    const input = screen.getByRole('textbox')
    expect(input).toBeDisabled()
  })
})
