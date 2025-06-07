import { useContext } from "react";
import { useFocusWithin } from "react-aria";
import { OverlayTriggerStateContext, Popover } from "react-aria-components";

export type SysPopoverProps = {
  children?: React.ReactNode;
  defaultOpen?: boolean;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  isNonModal?: boolean;
  shouldCloseOnBlur?: boolean;
};

export const SysPopover = (props: SysPopoverProps) => {
  const overlayState = useContext(OverlayTriggerStateContext);
  const { focusWithinProps } = useFocusWithin({
    onBlurWithin() {
      if (props.shouldCloseOnBlur) {
        // when a popover is open, and we again press the trigger, then we will be
        // unable to close the popover anymore. to prevent this, we wait for the
        // next tick to close the overlay. setTimeout() is used, instead of
        // requestAnimationFrame() or queueMicrotask().
        setTimeout(() => {
          overlayState?.close();
        }, 0);
      }
    },
  });

  return (
    <Popover
      offset={8}
      defaultOpen={props.defaultOpen}
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      isNonModal={props.isNonModal}
      // TODO(hastebrot): it should not flip anymore while the popover is open.
      shouldFlip={true}
    >
      <div {...focusWithinProps}>{props.children}</div>
    </Popover>
  );
};
