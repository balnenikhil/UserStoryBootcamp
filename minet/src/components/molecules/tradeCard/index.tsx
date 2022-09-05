import { Box, Grid } from "@mui/material";
import React from "react";
import { Icon } from "../../atoms/icon";
import { TypographyComponent } from "../../atoms/typography";

interface TradeProps {
  icon: string;
  coin: string;
  value: string;
  symbol: string;
  change: string;
  market: string;
}

export const TradeCard = (props: TradeProps) => {
  return (
    <div>
      <Grid container direction="row">
        <Grid item>
          <Icon source={props.icon}></Icon>
          <Box flexDirection="column">
            <TypographyComponent text={props.coin}></TypographyComponent>
            <TypographyComponent text={props.symbol}></TypographyComponent>
          </Box>
        </Grid>
        <Grid item>
          <TypographyComponent text={props.value}></TypographyComponent>
        </Grid>
        <Grid item>
          <TypographyComponent text={props.change}></TypographyComponent>
        </Grid>
        <Grid item>
          <TypographyComponent text={props.market}></TypographyComponent>
        </Grid>
      </Grid>
    </div>
  );
};
