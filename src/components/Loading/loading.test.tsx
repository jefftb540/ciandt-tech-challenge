import { render, screen } from '@testing-library/react'
import { Loading } from './Loading'

describe('Loading component', () => {
  it('renders the SVG correctly', () => {
    render(<Loading />)

    const svg = screen.getByTestId('loading-svg')
    expect(svg).toBeInTheDocument()
  })

  it('renders all pokeball paths', () => {
    render(<Loading />)

    const paths = screen.getAllByTestId('loading-path')
    expect(paths.length).toBe(4)
  })

  it('svg has correct size and stroke', () => {
    render(<Loading />)

    const svg = screen.getByTestId('loading-svg')

    expect(svg).toHaveAttribute('width', '250')
    expect(svg).toHaveAttribute('height', '250')
    expect(svg).toHaveAttribute('stroke', '#5a5a5a')
  })
})
