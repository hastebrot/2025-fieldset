import {
  Dialog,
  DialogTrigger,
  Modal,
  ModalOverlay,
  type DialogRenderProps,
} from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysIcon } from "./sys-icon";
import { SysIconButton } from "./sys-icon-button";
import { SysKeyboard } from "./sys-keyboard";
import { SysTheme } from "./sys-theme";

// https://github.com/medusajs/medusa/blob/v2.8.3/packages/design-system/ui/src/components/drawer/drawer.tsx
// https://docs.medusajs.com/ui/components/drawer
// https://react-spectrum.adobe.com/react-aria/Modal.html

export type SysDrawerModalTriggerProps = {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
};

export const SysDrawerModalTrigger = (props: SysDrawerModalTriggerProps) => {
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

export type SysDrawerModalProps = {
  children?: React.ReactNode | ((opts: DialogRenderProps) => React.ReactNode);
};

export const SysDrawerModal = (props: SysDrawerModalProps) => {
  return (
    <ModalOverlay isDismissable>
      <SysTheme className="bg-(--bg-overlay) fixed inset-0 z-100">
        <Modal>
          <Dialog
            className={classNames(
              "bg-(--bg-base) shadow-(--elevation-modal) fixed inset-y-2 right-2 w-[calc(100%-16px)] max-w-[560px]",
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

export type SysDrawerModalBodyProps = {
  className?: string;
  children?: React.ReactNode;
};

export const SysDrawerModalBody = (props: SysDrawerModalBodyProps) => {
  return <div className={classNames("flex-1", props.className)}>{props.children}</div>;
};

export type SysDrawerModalHeaderProps = {
  children?: React.ReactNode;
  onCloseButtonPress?: () => void;
};

export const SysDrawerModalHeader = (props: SysDrawerModalHeaderProps) => {
  return (
    <div
      className={classNames(
        "border-(--border-base) gap-x-4 border-b px-4 py-2",
        "flex items-center justify-between ",
      )}
    >
      <div className="flex flex-col gap-y-1">{props.children}</div>
      <div className="flex items-center gap-x-2">
        <SysKeyboard>esc</SysKeyboard>
        <SysIconButton size="small" variant="ghost" onPress={props.onCloseButtonPress}>
          <SysIcon name="x" variant="outlined" width={15} strokeWidth={2} />
        </SysIconButton>
      </div>
    </div>
  );
};

export type SysDrawerModalFooterProps = {
  children?: React.ReactNode;
};

export const SysDrawerModalFooter = (props: SysDrawerModalFooterProps) => {
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
