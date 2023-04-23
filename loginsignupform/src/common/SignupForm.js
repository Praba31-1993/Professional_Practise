import React from "react";
import {
  Input,
  InputLabel,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import {Link} from 'react-router-dom'
export default function SignupForm() {

  return (
    <>
      <div className="login-container container   justify-content-between mt-5">
        <div
          className="login-formsection p-5"
          style={{
            width: "50%",
            height: "fit-content",
            background: "white",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Sign Up Form
          </Typography>
          <Divider sx={{ mb: 5 }} />

          <InputLabel htmlFor="component-simple">First Name</InputLabel>
          <Input id="component-simple" sx={{ width: "100%", mb: 5 }} />

          <InputLabel htmlFor="component-simple">Last Name</InputLabel>
          <Input id="component-simple" sx={{ width: "100%", mb: 5 }} />

          <InputLabel htmlFor="component-simple">Email</InputLabel>
          <Input id="component-simple" sx={{ width: "100%", mb: 5 }} />

          <InputLabel htmlFor="component-simple">Phone Number</InputLabel>
          <Input id="component-simple" sx={{ width: "100%", mb: 5 }} />

          
          <Button variant="contained" sx={{ mt: 5, width: "100%" }}>
            Sign Up
          </Button>
          <Link to="/login" className="mt-2 float-right">Log In</Link>

        </div>
      </div>
    </>
  );
}
