import React, { useEffect, useState } from "react";
import "../../App.css";
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";

import man from "../../assets/man.png";
import woman from "../../assets/woman.png";
import kid from "../../assets/kid.jpeg";
import teen from "../../assets/teen.png";
import senior from "../../assets/senior.png";

type UserObj = {
  userName: string;
  age: number;
  gender: string;
  icon: string;
  image: string;
};

export const Form = () => {
  const [error, setError] = useState("");
  const [userDetails, setUserDetails] = useState<UserObj>({
    userName: "",
    age: 0,
    gender: "",
    icon: "",
    image: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    if (name === "age") {
      const regex = /[^0-9]+/;
      if (regex.test(e.target.value)) {
        setError("Incorrect Age: Please Enter Numbers Only");
      } else {
        setError("");
      }
    }
    setUserDetails({ ...userDetails, [name]: value });
  };

  useEffect(() => {
    if (userDetails.gender === "Male") {
      setUserDetails({ ...userDetails, icon: man });
    }

    if (userDetails.gender === "Female") {
      setUserDetails({ ...userDetails, icon: woman });
    }

    if (userDetails.age > 0 && userDetails.age < 10) {
      setUserDetails({ ...userDetails, image: kid });
    }

    if (userDetails.age >= 10 && userDetails.age < 40) {
      setUserDetails({ ...userDetails, image: teen });
    }
    if (userDetails.age >= 40) {
      setUserDetails({ ...userDetails, image: senior });
    }
  }, [userDetails.gender, userDetails.age]);

  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h2" color={"black"} padding="50px">
        Enter User Details
      </Typography>
      <Box paddingBottom={"20px"}>
        <TextField
          name="userName"
          label="Enter Your Name"
          sx={{ width: "35rem" }}
          value={userDetails.userName}
          onChange={handleChange}
        />
      </Box>
      {userDetails.userName && (
        <Box>
          <TextField
            name="age"
            label="Enter Your Age"
            sx={{ width: "35rem" }}
            onChange={handleChange}
            helperText={error}
          />
          <div>
            {userDetails.age > 0 && (
              <Box>
                <img src={userDetails.image} alt="img" />
              </Box>
            )}
          </div>
          <Box display="flex" justifyContent="center" paddingTop={"20px"}>
            <FormControl>
              <InputLabel id="demo-simple-select-label">
                Select Gender
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                name="gender"
                value={userDetails.gender}
                label="Select Gender"
                onChange={handleChange}
                sx={{ width: 560 }}
              >
                <MenuItem value={""}>None</MenuItem>
                <MenuItem value={"Male"}>Male</MenuItem>
                <MenuItem value={"Female"}>Female</MenuItem>
              </Select>
            </FormControl>
            {userDetails.gender && (
              <Box paddingLeft={"5px"}>
                <img src={userDetails.icon} alt="img" height={50} width={50} />
              </Box>
            )}
          </Box>
        </Box>
      )}
    </Box>
  );
};