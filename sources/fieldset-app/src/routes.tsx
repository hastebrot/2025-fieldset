import { type RouteObject } from "react-router";
import { SysButton } from "./components/system/sysButton";
import { SysCheckbox, SysCheckboxGroup } from "./components/system/sysCheckboxField";
import { SysIcon } from "./components/system/sysIcon";
import { SysInlineTip } from "./components/system/sysInlineTip";
import { SysRadio, SysRadioGroup } from "./components/system/sysRadioField";
import { SysText } from "./components/system/sysText";
import { SysTextInput } from "./components/system/sysTextField";
import { SysTheme } from "./components/system/sysTheme";
import { SysViewport } from "./components/system/sysViewport";

export const IndexScreen = () => {
  return (
    <SysTheme variant="dark">
      <SysViewport className="min-h-dvh" overflowX overflowY>
        <div>
          <div className="p-[16px] flex items-center gap-2">
            <SysText>Text</SysText>
            <SysText size="small">Text</SysText>
            <SysText family="mono">Text</SysText>
            <SysText family="mono" size="small">
              Text
            </SysText>
            <SysIcon name="plus" variant="outlined" width={18} />
            <SysIcon name="minus" variant="outlined" width={18} />
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
          <div className="p-[16px] grid auto-cols-fr grid-flow-col">
            <div className="flex flex-col gap-2">
              <SysCheckbox label="Check" />
              <SysCheckbox label="Check" defaultSelected />
              <SysCheckbox label="Check" isIndeterminate />
            </div>
            <div className="flex flex-col gap-2">
              <SysCheckbox label="Check" isDisabled />
              <SysCheckbox label="Check" isDisabled defaultSelected />
              <SysCheckbox label="Check" isDisabled isIndeterminate />
            </div>
          </div>
          <div className="p-[16px] grid auto-cols-fr grid-flow-col">
            <div className="flex flex-col gap-2">
              <SysCheckboxGroup label="Check group" defaultValue={["1"]}>
                <SysCheckbox value="1" label="Check" />
                <SysCheckbox value="2" label="Check" />
                <SysCheckbox value="3" label="Check" isDisabled />
              </SysCheckboxGroup>
            </div>
            <div className="flex flex-col gap-2">
              <SysRadioGroup label="Radio group" defaultValue="1">
                <SysRadio value="1" label="Radio" />
                <SysRadio value="2" label="Radio" />
                <SysRadio value="3" label="Radio" isDisabled />
              </SysRadioGroup>
            </div>
          </div>
        </div>
      </SysViewport>
    </SysTheme>
  );
};

export const routes: RouteObject[] = [
  // wrap.
  { path: "/", element: <IndexScreen /> },
];
