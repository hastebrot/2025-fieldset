import { classNames } from "../../helpers/clsx";

export type SysViewportProps = {
  className?: string;
  children?: React.ReactNode;
  overflowX?: boolean;
  overflowY?: boolean;
};

export const SysViewport = (props: SysViewportProps) => {
  return (
    <div
      className={classNames(
        props.className,
        "grid relative",
        props.overflowX && "overflow-x-auto",
        props.overflowY && "overflow-y-auto",
      )}
    >
      <div className="grid absolute inset-0">{props.children}</div>
    </div>
  );
};
