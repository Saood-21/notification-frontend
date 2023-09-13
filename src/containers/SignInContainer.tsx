import SignIn from "../components/SignIn/SignIn";

const SignInContainer = () => {
  return (
    <>
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
        <SignIn></SignIn>
      </div>
    </>
  );
};

export default SignInContainer;
