import { Separator } from "react-aria-components";
import { classNames } from "../../helpers/clsx";

export type SysSeparatorProps = {
  orientation?: "horizontal" | "vertical";
  variant?: "solid" | "dashed";
};

export const SysSeparator = ({ ...props }: SysSeparatorProps) => {
  props.orientation = props.orientation ?? "horizontal";
  props.variant = props.variant ?? "solid";

  return (
    <Separator
      orientation={props.orientation}
      className={classNames(
        props.variant === "solid" && [
          "border-(--border-base)",
          props.orientation === "horizontal" && "w-full border-t",
          props.orientation === "vertical" && "h-full border-l",
        ],
        props.variant === "dashed" && [
          "border-transparent bg-transparent",
          props.orientation === "horizontal" && [
            "w-full h-px",
            "bg-[size:4px_1px]",
            "bg-[linear-gradient(90deg,var(--border-strong)_1px,transparent_1px)]",
          ],
          props.orientation === "vertical" && [
            "w-px h-full",
            "bg-[size:1px_4px]",
            "bg-[linear-gradient(0deg,var(--border-strong)_1px,transparent_1px)]",
          ],
        ],
      )}
    />
  );
};
