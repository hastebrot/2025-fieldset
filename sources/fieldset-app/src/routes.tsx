import { type RouteObject } from "react-router";
import { SysIcon } from "./components/system/sysIcon";

export const IndexScreen = () => {
  return (
    <div className="p-[16px] flex items-center gap-[8px]">
      <SysIcon name="home" variant="outlined" width={20} />
      <SysIcon name="home" variant="filled" width={20} />
      <span>home</span>
    </div>
  );
};

export const routes: RouteObject[] = [
  // wrap.
  { path: "/", element: <IndexScreen /> },
];
