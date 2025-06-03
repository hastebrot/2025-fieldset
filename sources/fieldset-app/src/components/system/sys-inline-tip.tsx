import { classNames } from "../../helpers/clsx";
import { typography } from "./sys-tokens";

export type SysInlineTipProps = {
  children?: React.ReactNode;
  label: string;
  variant?: "error" | "warning" | "success" | "info";
};

export const SysInlineTip = (props: SysInlineTipProps) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-[4px_1fr] items-start gap-3 p-3",
        "rounded-lg border border-(--border-base)",
        "bg-(--bg-component) text-(--fg-subtle)",
      )}
      style={{
        ...typography[".txt-small"],
      }}
    >
      <div
        role="presentation"
        className={classNames("h-full w-1 rounded-full", "bg-(--tag-neutral-icon)", [
          props.variant === "error" && "!bg-(--tag-red-icon)",
          props.variant === "warning" && "!bg-(--tag-orange-icon)",
          props.variant === "success" && "!bg-(--tag-green-icon)",
        ])}
      ></div>
      <div className="text-pretty">
        <strong
          className="text-(--fg-base)"
          style={{
            ...typography[".txt-small-plus"],
          }}
        >
          {props.label}:
        </strong>{" "}
        {props.children}
      </div>
    </div>
  );
};
