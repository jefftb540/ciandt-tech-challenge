import { render, screen } from '@testing-library/react'

import { Chip } from './Chip'

describe('Chip component', () => {
  const labelText = 'Test Chip'

  const getChipElement = (label = labelText) => {
    return screen.getByRole('button', { name: label })
  }

  it('renders children/label', () => {
    render(<Chip component="button" label={labelText}></Chip>)
    const chipElement = getChipElement()
    expect(chipElement).toBeInTheDocument()
  })
})
