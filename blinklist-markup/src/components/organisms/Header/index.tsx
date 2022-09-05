import { Grid } from "@mui/material";
import React from "react";
import { AvatarComponent } from "../../atoms/Avatar";
import { ButtonComponent } from "../../atoms/Button";
import { Icon } from "../../atoms/Icon";
import { Logo } from "../../atoms/Logo";

export const Header = () => {
  return (
    <div>
      <Grid container direction="row">
        <Logo source={"logo.png"} />
        <Icon source={"search.png"} onClick={() => {}}/>
        <ButtonComponent text="Explore" variant="text" onClick={() => {}} />
        <ButtonComponent text="My Library" variant="text" onClick={() => {}} />
        <ButtonComponent text="Highlights" variant="text" onClick={() => {}} />
        <AvatarComponent src="user.png" onClick={() => {}}/>
      </Grid>
    </div>
  );
};
