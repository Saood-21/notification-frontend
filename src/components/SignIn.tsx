import { Container, Typography, TextField, Button, Grid } from "@mui/material";

function SignIn() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Add your sign-in logic here
  };

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        paddingTop: "0px",
        paddingRight: "100px" ,
        paddingLeft: "100px" ,
        paddingBottom: "100px",
        width: "500px",
        borderBottom: "5px solid blue",
        borderRadius: "10px",
        boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.2)"
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
                  label="Email"
                  variant="outlined"
                  type="email"
                  required
                  InputProps={{ sx: { borderRadius: 10 } }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Password"
                  variant="outlined"
                  type="password"
                  required
                  InputProps={{ sx: { borderRadius: 10 } }}
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
                variant="contained"
                color="primary"
                style={{
                  marginTop: "20px",
                  borderRadius: "20px",
                  width: "200px",
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
