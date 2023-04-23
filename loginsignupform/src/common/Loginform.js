import React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {Link} from 'react-router-dom'
import {
  Input,
  InputLabel,
  IconButton,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export default function Loginform() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <div className="login-container container   justify-content-between mt-5">
        <div
          className="login-formsection p-5"
          style={{
            width: "50%",
            height: "500px",
            background: "white",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Login Form
          </Typography>
          <Divider sx={{ mb: 5 }} />

          <InputLabel htmlFor="component-simple">Email</InputLabel>
          <Input id="component-simple" sx={{ width: "100%", mb: 5 }} />

          <InputLabel htmlFor="component-simple">Password</InputLabel>
          <Input
            id="standard-adornment-password"
            sx={{ width: "100%" }}
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton onClick={handleClickShowPassword}>
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
          <Button variant="contained" sx={{ mt: 5, width: "100%" }}>
            Log In
          </Button>
          <div className="d-flex justify-content-between">
            <FormGroup>
              <FormControlLabel
                control={<Checkbox defaultChecked />}
                label="Remember me"
              />

              
            </FormGroup>
            <Link to="/signup" className="mt-2 ">Sign Up</Link>

          </div>
        </div>
      </div>
    </>
  );
}
