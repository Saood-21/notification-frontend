import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { AlignHorizontalCenter } from "@mui/icons-material";


//currently not functional, do not use


function SignUpForm() {
  return (
    <>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "50ch", height: "10ch" },
          order: "2px solid #000", // Border style and color
          borderRadius: "8px", // Border radius for rounded corners
          padding: "16px", // Padding inside the box
          width: '600px'
        }}
        noValidate
        autoComplete="off"
        bgcolor={'blue'}
      >
        <div>
          <TextField
            required
            id="outlined-required"
            label="Required"
            defaultValue="Hello World"
          />

          <div>
            <TextField
              required
              id="outlined-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
            />
          </div>
        </div>
      </Box>
    </>
  );
}

export default SignUpForm;
