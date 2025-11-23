import React from 'react'
import { LinkProps, Link as MuiLink } from '@mui/material'
import { styled } from '@mui/material/styles'
import { Link as RouterLink } from 'react-router-dom'

const StyledLink = styled(MuiLink)(({ theme }) => ({
  textDecoration: 'none',
  color: theme.palette.text.primary,
  fontWeight: 500,
  '&:hover': {
    textDecoration: 'underline',
  },
}))

export function Link(props: LinkProps & { to: string }) {
  return <StyledLink component={RouterLink} {...props} />
}
