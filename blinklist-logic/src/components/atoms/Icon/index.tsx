import React from 'react'

interface IconProps {
  source: string
  onClick?: () => void;
}

export const Icon = (props:IconProps) => {
  return (
    <div><img src={props.source} alt="icon"></img></div>
  )
}
