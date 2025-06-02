import { classNames } from "../../helpers/clsx";
import { typography } from "./sysTokens";

export type SysStatusBadgeProps = {
  children: React.ReactNode;
  color?: "gray" | "red" | "orange" | "green" | "blue" | "purple";
};

export const SysStatusBadge = (props: SysStatusBadgeProps) => {
  return (
    <span
      className={classNames(
        "bg-(--bg-subtle) text-(--fg-subtle) border-(--border-base) border",
        "flex w-fit select-none items-center overflow-hidden rounded-md box-border",
        "pl-0 pr-1 leading-none",
      )}
      style={{
        ...typography[".txt-compact-xsmall-plus"],
      }}
    >
      <div
        role="presentation"
        className={classNames("flex items-center justify-center w-5 h-[18px]")}
      >
        <div
          className={classNames(
            "w-2 h-2 rounded-xs",
            props.color === "gray" && "bg-(--tag-neutral-icon)",
            props.color === "red" && "bg-(--tag-red-icon)",
            props.color === "orange" && "bg-(--tag-orange-icon)",
            props.color === "green" && "bg-(--tag-green-icon)",
            props.color === "blue" && "bg-(--tag-blue-icon)",
            props.color === "purple" && "bg-(--tag-purple-icon)",
          )}
        ></div>
      </div>
      {props.children}
    </span>
  );
};
