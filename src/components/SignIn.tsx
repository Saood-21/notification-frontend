import { Container, Typography, TextField, Button, Grid } from "@mui/material";

function SignIn() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Add your sign-in logic here
  };

  return (
    <Container component="main" maxWidth="xs">
      <div >
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
                sx={{ borderRadius: "20px" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                required
                sx={{ borderRadius: "20px" }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            style={{ marginTop: "20px", borderRadius: "20px" }}
          >
            Sign In
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default SignIn;
