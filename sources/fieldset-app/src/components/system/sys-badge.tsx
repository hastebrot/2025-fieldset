import { classNames } from "../../helpers/clsx";
import { typography } from "./sys-tokens";

// https://github.com/medusajs/medusa/blob/v2.8.4/packages/design-system/ui/src/components/badge/badge.tsx
// https://docs.medusajs.com/ui/components/badge

export type SysBadgeProps = {
  children: React.ReactNode;
  color?: "gray" | "red" | "orange" | "green" | "blue" | "purple";
  size?: "base" | "2xsmall" | "xsmall" | "small";
  rounded?: "base" | "full";
};

export const SysBadge = ({ ...props }: SysBadgeProps) => {
  props.color = props.color ?? "gray";
  props.size = props.size ?? "base";
  props.rounded = props.rounded ?? "base";

  return (
    <span
      className={classNames(
        "inline-flex items-center gap-x-0.5 border box-border",
        props.color === "gray" && [
          "[&_svg]:text-(--tag-neutral-icon) bg-(--tag-neutral-bg) text-(--tag-neutral-text) border-(--tag-neutral-border)",
        ],
        props.color === "red" && [
          "[&_svg]:text-(--tag-red-icon) bg-(--tag-red-bg) text-(--tag-red-text) border-(--tag-red-border)",
        ],
        props.color === "orange" && [
          "[&_svg]:text-(--tag-orange-icon) bg-(--tag-orange-bg) text-(--tag-orange-text) border-(--tag-orange-border)",
        ],
        props.color === "green" && [
          "[&_svg]:text-(--tag-green-icon) bg-(--tag-green-bg) text-(--tag-green-text) border-(--tag-green-border)",
        ],
        props.color === "blue" && [
          "[&_svg]:text-(--tag-blue-icon) bg-(--tag-blue-bg) text-(--tag-blue-text) border-(--tag-blue-border)",
        ],
        props.color === "purple" && [
          "[&_svg]:text-(--tag-purple-icon) bg-(--tag-purple-bg) text-(--tag-purple-text) border-(--tag-purple-border)",
        ],
        [
          // wrap.
          props.size === "base" && "py-[5px] h-8 px-2.5",
          props.size === "2xsmall" && "h-5 px-1",
          props.size === "xsmall" && "py-[1px] h-6 px-1.5",
          props.size === "small" && "py-[3px] h-7 px-2",
        ],
        [
          // wrap.
          props.rounded === "base" && "rounded-md",
          props.rounded === "full" && "rounded-full",
        ],
      )}
      style={{
        ...(props.size === "base" && typography[".txt-compact-small-plus"]),
        ...(props.size === "2xsmall" && typography[".txt-compact-xsmall-plus"]),
        ...(props.size === "xsmall" && typography[".txt-compact-xsmall-plus"]),
        ...(props.size === "small" && typography[".txt-compact-xsmall-plus"]),
      }}
    >
      {props.children}
    </span>
  );
};
