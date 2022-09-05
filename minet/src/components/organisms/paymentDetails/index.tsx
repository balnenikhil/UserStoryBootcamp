import { Grid } from '@mui/material';
import React from 'react'
import { ButtonComponent } from '../../atoms/button';
import { Icon } from '../../atoms/icon';
import { TypographyComponent } from '../../atoms/typography';

interface PaymentDetailsProps{
    icon: string;
    coinValue: string;
    message: string;
    tradeType: "BUY" | "SELL";
}

export const PaymentDetails = (props: PaymentDetailsProps) => {
    const handleBuy = () => {};
    const handleUsd = () => {};
  return (
    <div>
        <Grid container justifyContent="center" direction="column">
            <Grid item>
                <Icon source={props.icon}/>
            </Grid>
            <Grid item>
                <TypographyComponent text={props.coinValue} variant="h3"/>
            </Grid>
            <Grid item>
                <TypographyComponent text={props.message} variant="body1"/>
            </Grid>
            <Grid item>
                <Grid container direction="row">
                   <Grid item><ButtonComponent text={`${props.tradeType} CRYPTO`} onClick={handleBuy} variant={"outlined"}/></Grid>
                   <Grid item><ButtonComponent text="GO TO USD COIN" onClick={handleUsd} variant={"contained"}/></Grid>
                </Grid>
            </Grid>
        </Grid>
    </div>
  )
}
