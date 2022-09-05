import { Box, Tab, Tabs } from "@mui/material";
import React from "react";

interface TabOptionProps {
  option: String;
  content:String;
}

export const TabsComponent = (props:TabOptionProps[]) => {
  const [value, setValue] = React.useState("one");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {props.map((data) => (
              <Tab value={data.option} label={data.content} />
            ))}
      </Tabs>
    </Box>
  );
};
