import React from 'react'
import { ChipProps, Chip as MuiChip } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colorsMap } from '../../../utils/constants/colorsMap'

const StyledChip = styled(MuiChip)(({ theme, label }) => ({
  borderRadius: 6,
  backgroundColor: colorsMap[label as string] || theme.palette.text.primary,
  padding: '0 4px',
  textTransform: 'capitalize',
  fontWeight: 500,
  fontSize: '0.875rem',
  textShadow: '1px 1px 2px rgba(0, 0, 0, .7)',
}))

export function Chip(props: ChipProps) {
  return <StyledChip size="small" {...props} />
}
