import React from 'react'
import { MenuItemProps, MenuItem as MuiMenuItem } from '@mui/material'
import { styled } from '@mui/material/styles'

const StyledMenuItem = styled(MuiMenuItem)(({ theme }) => ({
  '&.Mui-selected': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.action.selected,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  '&.MuiMenuItem-root': {
    color: theme.palette.text.secondary,
    backgroundColor: theme.palette.background.paper,
  },
  '&.MuiMenu-paper': { marginTop: 20 },
}))

export function MenuItem(props: MenuItemProps) {
  const { children, ...rest } = props

  return (
    <>
      <StyledMenuItem {...rest}>{children}</StyledMenuItem>
    </>
  )
}
