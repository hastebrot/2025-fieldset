import { type RouteObject } from "react-router";
import { SysButton } from "./components/system/sysButton";
import { SysCheckbox } from "./components/system/sysCheckboxField";
import { SysIcon } from "./components/system/sysIcon";
import { SysInlineTip } from "./components/system/sysInlineTip";
import { SysTextInput } from "./components/system/sysTextField";
import { SysTheme } from "./components/system/sysTheme";

export const IndexScreen = () => {
  return (
    <SysTheme variant="dark">
      <div className="min-h-dvh">
        <div className="p-[16px] flex items-center gap-2">
          <span>Home</span>
          <SysIcon name="plus" variant="outlined" width={18} />
        </div>
        <div className="p-[16px] flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <SysButton variant="filled">Button</SysButton>
            <SysButton variant="outlined">Button</SysButton>
            <SysButton variant="ghost">Button</SysButton>
            <SysButton variant="danger">Button</SysButton>
            <SysButton isDisabled>Button</SysButton>
          </div>
          <div className="flex items-center gap-2">
            <SysButton size="small" variant="filled">
              Button
            </SysButton>
            <SysButton size="small" variant="outlined">
              Button
            </SysButton>
            <SysButton size="small" variant="ghost">
              Button
            </SysButton>
            <SysButton size="small" variant="danger">
              Button
            </SysButton>
            <SysButton size="small" isDisabled>
              Button
            </SysButton>
          </div>
        </div>
        <div className="p-[16px] flex flex-col gap-2">
          <SysInlineTip label="Tip" variant="info">
            Medusa UI is a package of React components to be used in Medusa Admin customizations.
          </SysInlineTip>
          <SysInlineTip label="Error" variant="error">
            An error occurred. Please try again.
          </SysInlineTip>
          <SysInlineTip label="Warning" variant="warning">
            This action cannot be undone.
          </SysInlineTip>
          <SysInlineTip label="Success" variant="success">
            Product created successfully!
          </SysInlineTip>
        </div>
        <div className="p-[16px] flex flex-col gap-2">
          <SysTextInput placeholder="Sales Channel Name" />
          <SysTextInput placeholder="Sales Channel Name" isDisabled />
          <SysTextInput placeholder="Sales Channel Name" isInvalid />
        </div>
        <div className="p-[16px] flex flex-col gap-2">
          <SysCheckbox label="Billing address same as shipping address" />
          <SysCheckbox label="Billing address same as shipping address" isDisabled />
          <SysCheckbox label="Billing address same as shipping address" defaultSelected />
          <SysCheckbox
            label="Billing address same as shipping address"
            defaultSelected
            isDisabled
          />
          <SysCheckbox label="Billing address same as shipping address" isIndeterminate />
          <SysCheckbox
            label="Billing address same as shipping address"
            isIndeterminate
            isDisabled
          />
        </div>
      </div>
    </SysTheme>
  );
};

export const routes: RouteObject[] = [
  // wrap.
  { path: "/", element: <IndexScreen /> },
];
