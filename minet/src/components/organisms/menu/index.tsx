import { Grid } from '@mui/material'
import React from 'react'
import { Icon } from '../../atoms/icon'
import { Logo } from '../../atoms/logo'

export const SideMenu = () => {
    //icon images location
    const Icons = ["performance", "Time", "plug", "bell", "logout"]
  return (
    <div>
        <Grid container direction="column">
            <Grid item>
                <Logo source={'logo.png'}></Logo>
            </Grid>
        {Icons.map((icon) => (
          <Grid item>
            <Icon source={icon}></Icon>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
