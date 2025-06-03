import { classNames } from "../../helpers/clsx";
import { typography } from "./sys-tokens";

export type SysTextProps = {
  children?: React.ReactNode;
  family?: "sans" | "mono";
  weight?: "regular" | "plus";
  size?: "base" | "xsmall" | "small" | "large" | "xlarge";
};

export const SysText = (props: SysTextProps) => {
  return (
    <span
      className={classNames(
        [
          props.family === undefined && "font-sans",
          props.family === "sans" && "!font-sans",
          props.family === "mono" && "!font-mono",
        ],
        [
          props.weight === undefined && "font-normal",
          props.weight === "regular" && "!font-normal",
          props.weight === "plus" && "!font-medium",
        ],
      )}
      style={{
        ...(props.size === undefined && typography[".txt-medium"]),
        ...(props.size === "base" && typography[".txt-medium"]),
        ...(props.size === "xsmall" && typography[".txt-xsmall"]),
        ...(props.size === "small" && typography[".txt-small"]),
        ...(props.size === "large" && typography[".txt-large"]),
        ...(props.size === "xlarge" && typography[".txt-xlarge"]),
      }}
    >
      {props.children}
    </span>
  );
};
