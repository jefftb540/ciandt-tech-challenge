import React from 'react'
import { ButtonProps, Button as MuiButton } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledButton = styled(MuiButton)(({ theme }) => ({
  borderRadius: 12,
  backgroundColor: 'transparent',
  border: `1px solid ${theme.palette.divider}`,
  color: theme.palette.text.primary,
  textTransform: 'none',
  maxWidth: 200,
}))

export function Button(props: ButtonProps) {
  return <StyledButton size="small" {...props} />
}
