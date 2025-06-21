import { useEffect } from "react";
import { useNavigate, type RouteObject } from "react-router";
import { Week23Screen } from "./screens/week-23-screen";
import { Week24Screen } from "./screens/week-24-screen";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: () => {
      const navigate = useNavigate();
      useEffect(() => {
        navigate("/week-24", { replace: true });
      }, []);
      return null;
    },
  },
  { path: "/week-23", Component: () => <Week23Screen /> },
  { path: "/week-24", Component: () => <Week24Screen /> },
];
