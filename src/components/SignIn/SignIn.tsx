import { Container, Typography, TextField, Button, Grid } from "@mui/material";
import { FormEvent, useState } from "react";

interface obj {
  name: string;
  password: string;
}

interface Props {
  onSignIn: (obj: obj) => void;
}

function SignIn({ onSignIn }: Props) {
  const [credentials, setCredentials] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log(credentials);
    onSignIn(credentials);

  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "0px",
        paddingRight: "100px",
        paddingLeft: "100px",
        paddingBottom: "100px",
        width: "500px",
        borderBottom: "5px solid blue",
        borderRadius: "10px",
        boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.2)",
      }}
    >
      <Container component="main" maxWidth="xs">
        <div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img src="../1635144573315.jpeg" alt="Image Description" />
          </div>
          <Typography variant="h5" gutterBottom>
            Sign In
          </Typography>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  onChange={(event) =>
                    setCredentials({
                      ...credentials,
                      name: event.target.value,
                    })
                  }
                  label="Username"
                  variant="outlined"
                  // type="email"
                  required
                  // InputProps={{ sx: { borderRadius: 10 } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  onChange={(event) =>
                    setCredentials({
                      ...credentials,
                      password: event.target.value,
                    })
                  }
                  label="Password"
                  variant="outlined"
                  type="password"
                  required
                  // InputProps={{ sx: { borderRadius: 10 } }}
                />
              </Grid>
            </Grid>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "10vh",
              }}
            >
              <Button
                size="large"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                style={{
                  marginTop: "20px",
                  // borderRadius: "20px",
                  // width: "200px",
                }}
              >
                Sign In
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default SignIn;
