import { Box } from '@mui/material'
import { Header } from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { Footer } from '../Footer/Footer'

export const Layout = () => (
  <Box>
    <Header />
    <Outlet />
    <Footer />
  </Box>
)
