import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import { theme } from './providers/theme/theme'
import { AppRoutes } from './routes/routes'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRoutes />
      </ThemeProvider>
    </>
  )
}

export default App
