import React, {useState} from "react"
import { Button, ThemeProvider, createTheme } from '@material-ui/core'

function App() {
  const [names, setNames] = useState([])
  const [newName, setNewName] = useState('')

  const addName = () => {
    if (newName.trim().length) {
      setNames([...names, newName])
    }
    setNewName('')
  }

  const theme = createTheme()

  return (
    <div>
      <h1>Names</h1>
      <ul aria-label='names' name='names'>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <input
        type='text'
        value={newName}
        onChange={(event) => setNewName(event.target.value)}
      />
      <ThemeProvider theme={theme}>
        <Button variant="contained" color="primary" onClick={addName}>
        Add Name
        </Button>
    </ThemeProvider>
    </div>
  )
}

export default App