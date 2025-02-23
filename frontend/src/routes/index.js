import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Footer from "../pages/Footer";
import Hero from "../pages/Hero";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Hero/>
      }
    ],
  },
]);

export default router;