import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { TypographyComponent } from "../../atoms/typography";

interface OptionProps {
  options: string[];
}

export const SelectOption = (props: OptionProps) => {
  const [deliveryOption, setDeliveryOption] = useState();
  const handleChange = (e: any) => {
    setDeliveryOption(e.target.value);
  };

  return (
    <div>
      <TypographyComponent text="Select speed delivery" variant="h3" />
      <Box sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Name</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={deliveryOption}
            onChange={handleChange}
          >
            {props.options.map((option) => (
              <MenuItem value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
};
