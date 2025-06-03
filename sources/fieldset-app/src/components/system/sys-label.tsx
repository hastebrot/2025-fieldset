import { classNames } from "../../helpers/clsx";
import { typography } from "./sys-tokens";

export type SysLabelProps = {
  children?: React.ReactNode;
  size?: "base" | "xsmall" | "small" | "large";
  weight?: "regular" | "plus";
};

export const SysLabel = (props: SysLabelProps) => {
  return (
    <div
      className={classNames(
        props.weight === undefined && "font-normal",
        props.weight === "regular" && "font-normal",
        props.weight === "plus" && "font-medium",
      )}
      style={{
        ...(props.size === undefined && typography[".txt-compact-medium"]),
        ...(props.size === "base" && typography[".txt-compact-medium"]),
        ...(props.size === "xsmall" && typography[".txt-compact-xsmall"]),
        ...(props.size === "small" && typography[".txt-compact-small"]),
        ...(props.size === "large" && typography[".txt-compact-large"]),
      }}
    >
      {props.children}
    </div>
  );
};
