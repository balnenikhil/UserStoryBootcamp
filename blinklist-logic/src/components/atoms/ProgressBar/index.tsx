import { LinearProgress } from '@mui/material';
import React from 'react'

interface ProgressBarProps {
  progressValue : number | undefined;
  variant: "determinate" | "indeterminate" | "buffer" | "query" | undefined;
}

export const ProgressBar = (props:ProgressBarProps) => {
  return (
    <div><LinearProgress variant={props.variant} value={props.progressValue} /></div>
  )
}
