import { render, screen, fireEvent } from '@testing-library/react'
import MenuItem from '@mui/material/MenuItem'
import { Select } from './Select'

describe('Select Component (MUI children version)', () => {
  it('should render select with Label', () => {
    render(
      <Select displayEmpty label="Choose an option">
        <MenuItem value="option1">Option 1</MenuItem>
      </Select>
    )

    expect(screen.getByText('Choose an option')).toBeInTheDocument()
  })

  it('should display all options when opened', async () => {
    render(
      <Select>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
        <MenuItem value="option3">Option 3</MenuItem>
      </Select>
    )

    fireEvent.mouseDown(screen.getByRole('combobox'))

    await screen.findByRole('option', { name: 'Option 1' })

    expect(screen.getByRole('option', { name: 'Option 1' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Option 2' })).toBeInTheDocument()
    expect(screen.getByRole('option', { name: 'Option 3' })).toBeInTheDocument()
  })

  it('should select option on click', async () => {
    const handleChange = jest.fn()

    render(
      <Select onChange={handleChange}>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
      </Select>
    )

    fireEvent.mouseDown(screen.getByRole('combobox'))
    fireEvent.click(screen.getByRole('option', { name: 'Option 1' }))

    expect(handleChange).toHaveBeenCalled()
  })

  it('should display selected value', () => {
    render(
      <Select value="option1">
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
      </Select>
    )

    expect(screen.getByText('Option 1')).toBeInTheDocument()
  })

  it('should be disabled when disabled prop is passed', () => {
    render(
      <Select disabled>
        <MenuItem value="option1">Option 1</MenuItem>
      </Select>
    )

    expect(screen.getByRole('combobox')).toHaveAttribute(
      'aria-disabled',
      'true'
    )
  })

  it('should handle multiple selections', async () => {
    const handleChange = jest.fn()

    render(
      <Select multiple onChange={handleChange} value={[]}>
        <MenuItem value="option1">Option 1</MenuItem>
        <MenuItem value="option2">Option 2</MenuItem>
      </Select>
    )

    fireEvent.mouseDown(screen.getByRole('combobox'))
    fireEvent.click(screen.getByRole('option', { name: 'Option 1' }))
    fireEvent.click(screen.getByRole('option', { name: 'Option 2' }))

    expect(handleChange).toHaveBeenCalled()
  })
})
