import React from 'react'
import '@testing-library/jest-dom'
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';

test('renders the app with an empty list of names', async () => {
  render(<App />)
  await waitFor(() => {
    const namesList = screen.getByRole('list', { name: 'names' })
    expect(namesList).toBeInTheDocument()
  })
})

test('adds a new name to the list', () => {
  render(<App />)
  const input = screen.getByRole('textbox')
  const addNameButton = screen.getByRole('button', { name: /add name/i })
  const newName = 'Alice'

  fireEvent.change(input, {target: {value: newName} })
  fireEvent.click(addNameButton)

  const namesList = screen.getByRole('list', {name: /names/i })
  const newNames = namesList.querySelectorAll('li')
  expect(newNames).toHaveLength(1)
  expect(newNames[0]).toHaveTextContent(newName)
})
