import { type RouteObject } from "react-router";
import { SysButton } from "./components/system/sysButton";
import { SysIcon } from "./components/system/sysIcon";
import { SysTheme } from "./components/system/sysTheme";

export const IndexScreen = () => {
  return (
    <SysTheme value={{ variant: "dark" }}>
      <div className="min-h-dvh">
        <div className="p-[16px] flex items-center gap-1.5">
          <span>Home</span>
          <SysIcon name="plus" variant="outlined" width={18} />
        </div>
        <div className="p-[16px] flex items-center gap-1.5">
          <SysButton variant="filled">Button</SysButton>
          <SysButton variant="outlined">Button</SysButton>
          <SysButton variant="ghost">Button</SysButton>
          <SysButton variant="danger">Button</SysButton>
          <SysButton isDisabled>Button</SysButton>
        </div>
        <div className="p-[16px] flex items-center gap-1.5">
          <SysButton size="large" variant="filled">
            Button
          </SysButton>
          <SysButton size="large" variant="outlined">
            Button
          </SysButton>
          <SysButton size="large" variant="ghost">
            Button
          </SysButton>
          <SysButton size="large" variant="danger">
            Button
          </SysButton>
          <SysButton size="large" isDisabled>
            Button
          </SysButton>
        </div>
      </div>
    </SysTheme>
  );
};

export const routes: RouteObject[] = [
  // wrap.
  { path: "/", element: <IndexScreen /> },
];
