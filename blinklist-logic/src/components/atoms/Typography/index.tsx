import { Typography, TypographyProps } from "@mui/material";
import React from "react";

interface TextProps extends TypographyProps {
  text: string;
}

export const TypographyComponent = (props: TextProps) => {
  return (
    <div>
      <Typography>
        {props.text}
      </Typography>
    </div>
  );
};
