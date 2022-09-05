import React from 'react'

interface LogoProps {
  source: string
}

export const Logo = (props:LogoProps) => {
  return (
    <div><img src={props.source} alt="logo"></img></div>
  )
}
