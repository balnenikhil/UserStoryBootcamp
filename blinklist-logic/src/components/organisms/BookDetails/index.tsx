import { Grid } from "@mui/material";
import React, { useState } from "react";
import { BookThumbnail } from "../../atoms/BokThumbnail";
import { ButtonComponent } from "../../atoms/Button";
import { TypographyComponent } from "../../atoms/Typography";
import { NavigationItem } from "../../molecules/NavigationItem";
import { ModalComponent } from "../Modal";
import { TabsComponent } from "../Tabs";

interface BookDetailsProps {
  bookName: string;
  description: string;
  authorName: string;
  timeRead: string;
  bookImage: string;
}

export const BookDetails = (props: BookDetailsProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleReadNow = () => {};
  const handleBuyBook = () => {};
  const handleSendToKindle = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      {open && <ModalComponent open={open} handleClose={handleClose} />}
      <Grid container direction="row">
        <Grid item>
          <TypographyComponent text={props.bookName} variant="h2" />
          <TypographyComponent text={props.description} variant="h3" />
          <TypographyComponent text={props.authorName} variant="h3" />
          <NavigationItem text={props.timeRead} src={"timeIcon.png"} />
          <ButtonComponent
            text="Read Now"
            variant="contained"
            onClick={handleReadNow}
          />
          <ButtonComponent
            text="Buy Book"
            variant="outlined"
            onClick={handleBuyBook}
          />
          <ButtonComponent
            text="Send to Kindle"
            variant="text"
            onClick={handleSendToKindle}
          />
          <TabsComponent />
        </Grid>
        <Grid item>
          <BookThumbnail src={props.bookImage} />
        </Grid>
      </Grid>
    </div>
  );
};
