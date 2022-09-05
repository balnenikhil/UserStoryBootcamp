import { Avatar } from '@mui/material';
import React from 'react'

interface AvatarProps{
  onClick: () => void;
  src: string;
}

export const AvatarComponent = (props:AvatarProps) => {
  return (
    <div><Avatar alt="avatar" src={props.src} onClick={props.onClick}/></div>
  )
}
