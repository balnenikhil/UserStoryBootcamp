import { Box, Grid, Modal, TextField } from "@mui/material";
import React from "react";
import { ButtonComponent } from "../../atoms/Button";
import { TypographyComponent } from "../../atoms/Typography";


interface ModalProps {
  open : boolean;
  handleClose : () => void;
}

export const ModalComponent = (props:ModalProps) => {
  const handleAddEmail = () => {};
  const handleNeedHelp = () => {};

  return (
    <div>
      <Modal open={props.open} onClose={props.handleClose}>
        <Box>
          <TypographyComponent text="Set up your Kindle" variant="h1" />
          <TypographyComponent
            text="Send blinks right to your Kindle from within the app"
            variant="h1"
          />
          <Grid container direction="row">
            <TextField placeholder="email" />
            <TextField placeholder="@kindle.com" />
          </Grid>
          <ButtonComponent
            text="Add email"
            onClick={handleAddEmail}
            variant="contained"
          />
          <ButtonComponent
            text="Need help?"
            onClick={handleNeedHelp}
            variant="outlined"
          />
        </Box>
      </Modal>
    </div>
  );
};
