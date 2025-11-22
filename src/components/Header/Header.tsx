import { Box, Typography } from '@mui/material'
import { Link } from '../ui/'

export const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        p: 2,
        borderBottom: '1px solid',
        boxShadow: '0 0 6px rgba(59,140,255,0.45)',
        mb: 4,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Typography variant="h4" component="h1">
        Pokemon Explorer
      </Typography>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Link to="/">Home</Link>
        <Link to="/compare">Compare</Link>
        <Link to="/favorites">Favorites</Link>
      </Box>
    </Box>
  )
}
