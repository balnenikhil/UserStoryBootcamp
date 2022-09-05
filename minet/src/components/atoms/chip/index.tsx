import { Chip, ChipProps } from '@mui/material'
import React from 'react'

export const ChipComponent = (props: ChipProps) => {
  return (
    <div><Chip label={props.label}/></div>
  )
}
