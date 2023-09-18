import { useState } from "react";
import NavBar from "../components/NavBar";
import AppContainer from "../containers/AppContainer";
import EventContainer from "../containers/EventContainer";
// import NotificationTypeContainer from "../containers/NotificationTypeContainer";

const LandingPage = () => {
  const [appId, setAppId] = useState<number>()
  return (
    <>
      <NavBar></NavBar>
      <div style={{ height: "80px" }}></div>
      <AppContainer onSelect={setAppId}/>
      <div style={{ height: "30px" }}></div>
      {appId && (<EventContainer appId={appId}/>)}
      {/* <div style={{ height: "30px" }}></div>
      <NotificationTypeContainer></NotificationTypeContainer>  */}
    </>
  );
};
 
export default LandingPage;
