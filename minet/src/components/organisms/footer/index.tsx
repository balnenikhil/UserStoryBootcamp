import { Grid } from "@mui/material";
import React from "react";
import { ButtonComponent } from "../../atoms/button";
import { TypographyComponent } from "../../atoms/typography";

export const Footer = () => {

    
  const handleNeedHelp = () => {};
  const handleDashboard = () => {};
  const handleCareers = () => {};
  const handleLegal = () => {};

  return (
    <div>
      <Grid container direction="row">
        <Grid item>
          <ButtonComponent
            text="Dashboard"
            variant="text"
            onClick={handleDashboard}
          />
        </Grid>
        <Grid item>
          <ButtonComponent
            text="Careers"
            variant="text"
            onClick={handleCareers}
          />
        </Grid>
        <Grid item>
          <ButtonComponent
            text="Legal & Privacy"
            variant="text"
            onClick={handleLegal}
          />
        </Grid>
        <Grid item>
          <TypographyComponent text="© 2021 Minet" variant="body2" />
        </Grid>
        <Grid item>
          <ButtonComponent
            text="Need Help"
            variant="outlined"
            onClick={handleNeedHelp}
          />
        </Grid>
      </Grid>
    </div>
  );
};
