import { createBrowserRouter } from "react-router-dom";
import SignInPage from "../pages/SignInPage";
import LandingPage from "../pages/LandingPage";
import NotificationTemplateForm from "../components/NotificationTemplateForm/NotificationTemplateForm";
import NotificationTemplateContainer from "../containers/NotificationTemplateContainer";

const router = createBrowserRouter([
  // { path: "/", element: <SignInPage /> },
  { path: "/", element: <NotificationTemplateContainer/> },
  { path: "/dashboard", element: <LandingPage /> },
]);

export default router;
