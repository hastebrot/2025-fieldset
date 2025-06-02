import {
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
  type DialogRenderProps,
} from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysIcon } from "./sysIcon";
import { SysIconButton } from "./sysIconButton";
import { SysKeyboard } from "./sysKeyboard";
import { SysTheme } from "./sysTheme";

// https://github.com/medusajs/medusa/blob/v2.8.3/packages/design-system/ui/src/components/focus-modal/focus-modal.tsx
// https://docs.medusajs.com/ui/components/focus-modal
// https://react-spectrum.adobe.com/react-aria/Modal.html

export type SysFocusModalTriggerProps = {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

export const SysFocusModalTrigger = (props: SysFocusModalTriggerProps) => {
  return (
    <DialogTrigger
      defaultOpen={props.defaultOpen}
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
    >
      {props.children}
    </DialogTrigger>
  );
};

export type SysFocusModalProps = {
  children?: React.ReactNode | ((opts: DialogRenderProps) => React.ReactNode);
};

export const SysFocusModal = (props: SysFocusModalProps) => {
  return (
    <ModalOverlay isDismissable>
      <SysTheme className="bg-(--bg-overlay) fixed inset-0 z-100">
        <Modal>
          <Dialog
            className={classNames(
              "bg-(--bg-base) shadow-(--elevation-modal) fixed inset-2",
              "flex flex-col overflow-hidden rounded-lg border outline-none",
            )}
          >
            {props.children}
          </Dialog>
        </Modal>
      </SysTheme>
    </ModalOverlay>
  );
};

export type SysFocusModalBodyProps = {
  className?: string;
  children?: React.ReactNode;
};

export const SysFocusModalBody = (props: SysFocusModalBodyProps) => {
  return <div className={classNames("flex-1", props.className)}>{props.children}</div>;
};

export type SysFocusModalHeaderProps = {
  children?: React.ReactNode;
  onCloseButtonPress?: () => void;
};

export const SysFocusModalHeader = (props: SysFocusModalHeaderProps) => {
  return (
    <div
      className={classNames(
        "border-(--border-base) gap-x-4 border-b px-4 py-2",
        "flex items-center justify-between ",
      )}
    >
      <div className="flex items-center gap-x-2">
        <SysIconButton size="small" variant="ghost" onPress={props.onCloseButtonPress}>
          <SysIcon name="x" variant="outlined" width={15} strokeWidth={2} />
        </SysIconButton>
        <SysKeyboard>esc</SysKeyboard>
      </div>
      {props.children}
    </div>
  );
};

export type SysFocusModalFooterProps = {
  children?: React.ReactNode;
};

export const SysFocusModalFooter = (props: SysFocusModalFooterProps) => {
  return (
    <div
      className={classNames(
        "border-(--border-base) gap-x-2 border-t p-4",
        "flex items-center justify-end",
      )}
    >
      {props.children}
    </div>
  );
};
