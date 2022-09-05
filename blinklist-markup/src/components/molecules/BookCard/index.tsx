import { Card, CardContent, CardMedia } from "@mui/material";
import React from "react";
import { ProgressBar } from "../../atoms/ProgressBar";
import { TypographyComponent } from "../../atoms/Typography";
import { NavigationItem } from "../NavigationItem";

interface BookCardProps {
  bookImage: string;
  bookName: string;
  authorName: string;
  timeRead: string;
  progressValue: number;
  iconSource: string;
}

export const Bookcard = (props: BookCardProps) => {
  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={props.bookImage}
        alt="book name"
      />
      <CardContent>
        <TypographyComponent variant="h5" text={props.bookName} />
        <TypographyComponent variant="body1" text={props.authorName} />
        <NavigationItem text={props.timeRead} src={props.iconSource} />
        <ProgressBar
          progressValue={props.progressValue}
          variant="determinate"
        />
      </CardContent>
    </Card>
  );
};
