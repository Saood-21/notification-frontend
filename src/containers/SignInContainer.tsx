import { useNavigate } from "react-router-dom";
import SignIn from "../components/SignIn/SignIn";
import apiClient, { CanceledError } from "../services/api-client";
import { useState } from "react";
import { Alert, AlertTitle, Snackbar } from "@mui/material";

interface credentials {
  name: string;
  password: string;
}

const SignInContainer = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState(false);

  const handleSignIn = async (credentials: credentials) => {
    apiClient
      .post("/auth", credentials)
      .then((response) => {
        if (response.status === 200) {
          console.log("sign-in success", response.headers);
          // localStorage.setItem()
          navigate("/dashboard");
        } else if (response.status === 502) {
          console.log("incorrect credentials");
        } else {
          console.log("sign in failed");
        }
      })
      .catch((err) => {
        console.log("Incorrect Credentials", err);
        setAlert(true);
        setTimeout(() => setAlert(false), 2000);
      });
  };

  return (
    <>
      {alert && (
        <Alert severity="error">This is an error alert — check it out!</Alert>
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "10vh",
          height: "100vh",
          backgroundColor: "#f0f0f0",
        }}
      >
        <SignIn onSignIn={handleSignIn}></SignIn>
      </div>
    </>
  );
};

export default SignInContainer;
