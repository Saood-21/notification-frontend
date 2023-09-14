import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import LandingPage from "../pages/LandingPage";
import NotificationTemplateContainer from "../containers/NotificationTemplateContainer";
import Carousel from "../components/Carousel/Carousel";

const router = createBrowserRouter([
  { path: "/", element: <SignInPage/> },
  { path: "/dashboard", element: <LandingPage /> },
  {path:"/notificationTemplateForm", element: <NotificationTemplateContainer/>},
  {path:"/test", element: <Carousel/>}
]);

export default router;
