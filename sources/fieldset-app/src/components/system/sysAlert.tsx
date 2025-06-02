import { classNames } from "../../helpers/clsx";
import { SysIcon } from "./sysIcon";
import { typography } from "./sysTokens";

export type SysAlertProps = {
  children?: React.ReactNode;
  variant?: "error" | "warning" | "success" | "info";
};

export const SysAlert = (props: SysAlertProps) => {
  return (
    <div
      className={classNames(
        "grid grid-cols-[20px_1fr] items-start gap-x-2 p-3",
        "rounded-lg border border-(--border-base)",
        "bg-(--bg-subtle) text-(--fg-base)",
      )}
      style={{
        ...typography[".txt-compact-small"],
      }}
    >
      <div className="flex items-center">
        {props.variant === "error" && (
          <SysIcon name="circle-x" variant="filled" width={18} className="text-(--tag-red-icon)" />
        )}
        {props.variant === "warning" && (
          <SysIcon
            name="alert-circle"
            variant="filled"
            width={18}
            className="text-(--tag-orange-icon)"
          />
        )}
        {props.variant === "success" && (
          <SysIcon
            name="circle-check"
            variant="filled"
            width={18}
            className="text-(--tag-green-icon)"
          />
        )}
        {props.variant === "info" && (
          <SysIcon
            name="info-circle"
            variant="filled"
            width={18}
            className="text-(--tag-neutral-icon)"
          />
        )}
      </div>
      <div className="text-pretty">{props.children}</div>
    </div>
  );
};
