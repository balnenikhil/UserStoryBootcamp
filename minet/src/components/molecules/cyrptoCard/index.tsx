import { Grid } from "@mui/material";
import React from "react";
import { AvatarComponent } from "../../atoms/avatar";
import { TypographyComponent } from "../../atoms/typography";

interface CryptoCardProps {
  src: string;
  currencyName: string;
  currencyValue: string;
  variant: "small" | "large";
  market: string;
  volume: string;
  supply: string;
}

export const CryptoCard = (props: CryptoCardProps) => {
  const handleClick = () => {};
  return (
    <div>
      {props.variant === "small" && (
        <Grid container direction="column">
          <Grid item>
            <AvatarComponent src={props.src} onClick={handleClick} />
          </Grid>
          <Grid item>
            <TypographyComponent variant="h3" text={props.currencyName} />
          </Grid>
          <Grid item>
            <TypographyComponent variant="h3" text={props.currencyValue} />
          </Grid>
        </Grid>
      )}
      {props.variant === "large" && (
        <Grid container direction="row">
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <AvatarComponent src={props.src} onClick={handleClick} />
              </Grid>
              <Grid item>
                <TypographyComponent variant="h3" text={props.currencyName} />
              </Grid>
              <Grid item>
                <TypographyComponent variant="h3" text={props.currencyValue} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Grid container direction="column">
              <Grid item>
                <TypographyComponent text="Market cap" variant="subtitle1"></TypographyComponent>
                <TypographyComponent text={props.market} variant="subtitle1"></TypographyComponent>
              </Grid>
            </Grid>
            <Grid container direction="column">
              <Grid item>
                <TypographyComponent text="Vol. 24H" variant="subtitle1"></TypographyComponent>
                <TypographyComponent text={props.volume} variant="subtitle1"></TypographyComponent>
              </Grid>
            </Grid>
            <Grid container direction="column">
              <Grid item>
                <TypographyComponent text="Circulating Supply" variant="subtitle1"></TypographyComponent>
                <TypographyComponent text={props.supply} variant="subtitle1"></TypographyComponent>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      )}
    </div>
  );
};
