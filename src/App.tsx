import { CssBaseline, ThemeProvider, Typography } from '@mui/material'
import './App.css'
import { theme } from './providers/theme/theme'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Typography variant="h4">Hello, World!</Typography>
        <CssBaseline />
      </ThemeProvider>
    </>
  )
}

export default App
