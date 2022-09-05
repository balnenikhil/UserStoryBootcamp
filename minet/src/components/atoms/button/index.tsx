import React from 'react'
import Button, { ButtonProps } from '@mui/material/Button';


interface MyButtonProps extends ButtonProps {
  onClick: () => void;
  variant : "text" | "outlined" | "contained" | undefined;
  text : string;
}

export const ButtonComponent = (props:MyButtonProps) => {
  return (
    <Button onClick={props.onClick}  variant={props.variant}>{props.text}</Button>
  )
}
