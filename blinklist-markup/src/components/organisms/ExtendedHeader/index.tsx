import { Divider, Grid } from "@mui/material";
import React from "react";

export const ExtendedNav = () => {
  return (
    <div>
      <Grid container>
        <Grid item>{/* Navigation Tabs*/}</Grid>
      </Grid>
      <Divider />
      <Grid container>
        <Grid item>
          {/* Navigation Items 1st column */}
        </Grid>
        <Grid item>
          {/* Navigation Items 2nd column */}
        </Grid>
        <Grid item>
          {/* Navigation Items 3rd column */}
        </Grid>
      </Grid>
    </div>
  );
};
