import { Box, Grid, Modal, TextField } from "@mui/material";
import React from "react";
import { ButtonComponent } from "../../atoms/Button";
import { TypographyComponent } from "../../atoms/Typography";

export const ModalComponent = () => {
  const [open, setOpen] = React.useState(false);
  const handleModal = () => setOpen(!open);
  const handleAddEmail = () => {};
  const handleNeedHelp = () => {};

  return (
    <div>
      <Modal open={open} onClose={handleModal}>
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
