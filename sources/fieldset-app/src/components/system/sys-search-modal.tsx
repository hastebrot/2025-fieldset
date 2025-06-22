// https://github.com/medusajs/medusa/blob/v2.8.4/packages/admin/dashboard/src/components/search/search.tsx
// https://react-spectrum.adobe.com/react-aria/Autocomplete.html
// https://react-spectrum.adobe.com/react-aria/examples/command-palette.html

import { classNames } from "../../helpers/clsx";
import { SysKeyboard } from "./sys-keyboard";
import { SysText } from "./sys-text";

export type SysSearchModalProps = {
  children?: React.ReactNode;
};

export const SysSearchModal = (props: SysSearchModalProps) => {
  return <CommandDialog>{props.children}</CommandDialog>;
};

type CommandDialogProps = {
  children?: React.ReactNode;
};

const CommandDialog = (props: CommandDialogProps) => {
  return (
    <div
      className={classNames(
        "flex flex-col overflow-hidden min-h-[300px]",
        "bg-(--bg-base) shadow-(--elevation-modal) rounded-xl",
      )}
    >
      <div className="flex flex-col h-full overflow-hidden">{props.children}</div>
      <footer
        className={classNames(
          "flex items-center justify-end px-4 py-3",
          "bg-(--bg-field) text-(--fg-subtle) border-t border-(--border-base)",
        )}
      >
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <SysText size="small">Navigation</SysText>
            <div className="flex items-center gap-x-1">
              <SysKeyboard>↓</SysKeyboard>
              <SysKeyboard>↑</SysKeyboard>
            </div>
          </div>
          <div className="bg-(--border-strong) h-3 w-px"></div>
          <div className="flex items-center gap-x-2">
            <SysText size="small">Open result</SysText>
            <div className="flex items-center gap-x-1">
              <SysKeyboard>↵</SysKeyboard>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
