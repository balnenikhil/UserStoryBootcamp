import { Grid } from "@mui/material";
import React from "react";
import { BookThumbnail } from "../../atoms/BokThumbnail";
import { ButtonComponent } from "../../atoms/Button";
import { TypographyComponent } from "../../atoms/Typography";
import { NavigationItem } from "../../molecules/NavigationItem";
import { Tabs } from "../Tabs";

export const BookDetails = () => {
  return (
    <div>
      <Grid container direction="row">
        <Grid item>
          <TypographyComponent text="Book Name" variant="h2" />
          <TypographyComponent text="Description" variant="h3" />
          <TypographyComponent text="Author Name" variant="h3" />
          <NavigationItem text={"13-minuteRead"} src={"timeIcon.png"}/>
          <ButtonComponent text="Read Now" variant="contained" onClick={() => {}} />
          <ButtonComponent text="Buy Book" variant="outlined" onClick={() => {}} />
          <ButtonComponent text="Send to Kindle" variant="text" onClick={() => {}} />
          <Tabs />
        </Grid>
        <Grid item>
          <BookThumbnail src="book.png" />
        </Grid>
      </Grid>
    </div>
  );
};
