import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

describe('App', () => {
  it('should be able to render the component', () => {
    render(<App />)
  })

  it('should be able to show the "Hello World!" text', () => {
    render(<App />)

    expect(screen.getByText('Hello World!')).toBeDefined()
  })
})
