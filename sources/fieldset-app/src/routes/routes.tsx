import { useEffect } from "react";
import { useNavigate, type RouteObject } from "react-router";
import { Week23Screen } from "./screens/week-23-screen";
import { Week24Screen } from "./screens/week-24-screen";
import { Week25Screen } from "./screens/week-25-screen";

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: () => {
      const navigate = useNavigate();
      useEffect(() => {
        navigate("/week-25", { replace: true });
      }, []);
      return null;
    },
  },
  { path: "/week-23", Component: () => <Week23Screen /> },
  { path: "/week-24", Component: () => <Week24Screen /> },
  { path: "/week-25", Component: () => <Week25Screen /> },
];
