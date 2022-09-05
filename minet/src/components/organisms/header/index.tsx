import { Grid } from "@mui/material";
import React from "react";
import { AvatarComponent } from "../../atoms/avatar";
import { ButtonComponent } from "../../atoms/button";
import { TypographyComponent } from "../../atoms/typography";

interface headerProps {
  title: string;
  profile: string;
}

export const Header = (props: headerProps) => {
  const handleSell = () => {};
  const handleBuy = () => {};
  const handleClick = () => {};
  return (
    <div>
      <Grid container justifyContent="space-between">
        <Grid item>
          <TypographyComponent text={props.title} variant="body1" />
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item>
              <ButtonComponent
                onClick={handleSell}
                variant={"contained"}
                text="SELL"
              />
            </Grid>
            <Grid item>
              <ButtonComponent
                onClick={handleBuy}
                variant={"contained"}
                text="BUY"
              />
            </Grid>
            <Grid item>
              <AvatarComponent onClick={handleClick} src={props.profile} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};
