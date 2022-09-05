import { Grid } from "@mui/material";
import React from "react";
import { ButtonComponent } from "../../atoms/button";
import { TypographyComponent } from "../../atoms/typography";

interface PaymentProps {
  amount: string;
}

export const PaymentCard = (props: PaymentProps) => {
  const handleBuyMax = () => {};
  return (
    <div>
      <Grid container>
        <Grid item>
          <TypographyComponent text={props.amount} />
        </Grid>
        <Grid item>
          <ButtonComponent
            text="Buy max"
            variant="outlined"
            onClick={handleBuyMax}
          />
        </Grid>
      </Grid>
    </div>
  );
};
