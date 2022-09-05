import { Grid } from '@mui/material'
import React from 'react'
import { ChipComponent } from '../../atoms/chip';
import { Icon } from '../../atoms/icon'
import { TypographyComponent } from '../../atoms/typography';

interface PortfolioProps{
  icon : string;
  coin :  string;
  value: string; 
  time: string
}

export const Portfolio = (props: PortfolioProps) => {
  return (
    <div>
      <Grid container direction="row" >
        <Grid item>
          <Icon source={props.icon}></Icon>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <TypographyComponent text={props.coin} variant="subtitle2"></TypographyComponent>
            <TypographyComponent text={props.value} variant="subtitle2"></TypographyComponent>
            <ChipComponent label={props.time}></ChipComponent>
          </Grid>
        </Grid>
        <Grid item>
          {/* Graph for price */}
        </Grid>
      </Grid>
    </div>
  )
}
