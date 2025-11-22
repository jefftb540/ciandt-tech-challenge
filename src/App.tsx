import { CssBaseline, ThemeProvider } from '@mui/material'
import './App.css'
import { theme } from './providers/theme/theme'
import { AppRoutes } from './routes/routes'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './providers/queryClient/queryClient'

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <AppRoutes />
        </ThemeProvider>
      </QueryClientProvider>
    </>
  )
}

export default App
