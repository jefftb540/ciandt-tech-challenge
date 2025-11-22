import { Box, styled } from '@mui/material'
import React from 'react'
import { Link } from '../ui'

const StyledFooter = styled(Box)(({ theme }) => ({
  width: '100%',
  marginTop: '8px',
  padding: '12px 16px',
  textAlign: 'center',
  color: theme.palette.info.main,
  fontSize: '14px',
}))

export const Footer = () => {
  return (
    <StyledFooter>
      Developed by{' '}
      <Link
        to="https://www.linkedin.com/in/jeffersonferreiralima/"
        target="_blank"
      >
        Jefferson Lima
      </Link>
    </StyledFooter>
  )
}
