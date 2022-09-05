import { Grid } from "@mui/material";
import React from "react";
import { Icon } from "../../atoms/Icon";
import { TypographyComponent } from "../../atoms/Typography";

interface NavigationItemProps {
  text: string;
  src: string;
}

export const NavigationItem = (props: NavigationItemProps) => {
  return (
    <div>
      <Grid container direction="row">
        <Grid item><Icon source={props.src}/></Grid>
        <Grid item>
          <TypographyComponent text={props.text} variant="body1"/>
        </Grid>
      </Grid>
    </div>
  );
};
