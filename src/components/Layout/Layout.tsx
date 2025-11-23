import { Box } from '@mui/material'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export const Layout = () => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <Header />
    <Box
      sx={{
        maxWidth: '960px',
        margin: 'auto',
        flexGrow: 1,
      }}
    >
      <Outlet />
    </Box>
    <Footer />
  </Box>
)
