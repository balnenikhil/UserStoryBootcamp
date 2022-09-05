import { Box } from "@mui/material";
import React from "react";
import { TypographyComponent } from "../../atoms/Typography";

interface BannerProps {
  text: string;
  src: string;
}

export const Banner = (props:BannerProps) => {
  return (
    <Box sx={{background:`${props.src}`}}>
      <TypographyComponent text={props.text} />
    </Box>
  );
};
