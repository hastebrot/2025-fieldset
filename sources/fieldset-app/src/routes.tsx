import { type RouteObject } from "react-router";

export const IndexScreen = () => {
  return <div className="p-[16px]">index</div>;
};

export const routes: RouteObject[] = [
  // wrap.
  { path: "/", element: <IndexScreen /> },
];
