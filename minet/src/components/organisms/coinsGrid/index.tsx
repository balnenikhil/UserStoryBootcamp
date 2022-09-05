import { Grid } from "@mui/material";
import React from "react";
import { ButtonComponent } from "../../atoms/button";

interface CryptoProps {
    buttons : string[];
}

export const CoinsGrid = (props: CryptoProps) => {

    const handleClick =()=> {
        
    }
    //data coming from api call
    // let buttons = ["Bitcoin", "XRP", "Poladot", "Ethereum"]
  return (
    <div>
      <Grid container direction="row">
        {props.buttons.map((button) => (
          <Grid item>
            <ButtonComponent
              text={button}
              variant="contained"
              onClick={handleClick}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
