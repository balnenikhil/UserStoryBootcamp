import { Grid } from "@mui/material";
import React from "react";
import { ChipComponent } from "../../atoms/chip";
import { Icon } from "../../atoms/icon";
import { TypographyComponent } from "../../atoms/typography";

interface walletCardProps {
  date: string;
  icon: string;
  coin: string;
  seller: string;
  status: string;
  coinValue: string;
  cashValue: string;
}

export const index = (props: walletCardProps) => {
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <TypographyComponent text={props.date} variant="body1" />
          </Grid>
          <Grid item>
            <Icon source={props.icon}></Icon>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <TypographyComponent text={props.coin} variant="body1" />
              </Grid>
              <Grid item>
                <Grid container>
                  <Grid item><TypographyComponent text={props.seller} variant="body1" /></Grid>
                  <Grid item><ChipComponent label={props.status}></ChipComponent></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="column">
          <Grid item>
            <TypographyComponent text={props.coinValue} variant="body1"/>
            <TypographyComponent text={props.cashValue} variant="body1"/>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
