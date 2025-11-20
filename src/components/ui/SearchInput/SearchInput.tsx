import React from 'react'
import {
  InputAdornment,
  TextField as MuiTextField,
  TextFieldProps,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'

const StyledTextField = styled(MuiTextField)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.text.primary,
  borderRadius: 16,
  '& .MuiInputLabel-root': {
    color: theme.palette.text.secondary,
  },
  '& .MuiInputBase-input': { padding: '10px 12px' },
  '& .MuiOutlinedInput-root': {
    color: theme.palette.text.secondary,
  },
}))

export function SearchInput(
  props: Omit<TextFieldProps, 'variant' | 'fullWidth'>
) {
  const { label, ...rest } = props

  return (
    <>
      <Typography variant="body2">{label}</Typography>
      <StyledTextField
        size="small"
        {...rest}
        slotProps={{
          input: {
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          },
        }}
      />
    </>
  )
}
