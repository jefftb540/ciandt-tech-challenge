import React from 'react'
import { Select as MuiSelect, SelectProps, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledSelect = styled(MuiSelect)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: 16,
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
  },
  '& .MuiSelect-select': {
    padding: '10px 12px',
  },
  '& .MuiOutlinedInput-root': {
    color: theme.palette.text.secondary,
  },
}))

export function Select(props: Omit<SelectProps, 'size'>) {
  const { label, children, ...rest } = props

  return (
    <>
      <Typography variant="body2">{label}</Typography>
      <StyledSelect size="small" {...rest}>
        {children}
      </StyledSelect>
    </>
  )
}
