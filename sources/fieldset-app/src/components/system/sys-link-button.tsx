import { Link } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { typography } from "./sys-tokens";

// https://github.com/medusajs/medusa/blob/v2.8.4/packages/admin/dashboard/src/components/common/link-button/link-button.tsx
// https://github.com/medusajs/medusa/blob/v2.8.4/www/packages/docs-ui/src/components/LinkButton/index.tsx
// https://github.com/medusajs/medusa/blob/v2.8.4/www/packages/docs-ui/src/components/MainNav/Items/Link/index.tsx
// https://www.figma.com/community/file/1278648465968635936/medusa-ui
// medusa ui (link button), https://www.figma.com/design/IJ5XCsUaGcHC99cTZNh8xt/Medusa-UI--Community-?node-id=5844-10734
// ludvig rask (design), https://x.com/ludvigrask

export type SysLinkButtonProps = {
  children?: React.ReactNode;
  variant?: "base" | "interactive" | "subtle" | "muted";
  href?: string;
  isDisabled?: boolean;
};

export const SysLinkButton = ({ ...props }: SysLinkButtonProps) => {
  props.variant = props.variant ?? "base";

  return (
    <Link
      className={classNames(
        "inline-flex items-center justify-center w-fit gap-1",
        "outline-none rounded-sm no-underline",
        "not-data-[disabled]:cursor-pointer",
        "data-[disabled]:text-(--fg-disabled)",
        "data-[focus-visible]:!shadow-(--borders-focus)",
        props.variant === "base" && [
          "text-(--fg-base)",
          "data-[hovered]:text-(--fg-subtle)",
          "data-[focused]:text-(--fg-base)",
        ],
        props.variant === "interactive" && [
          "text-(--fg-interactive)",
          "data-[hovered]:text-(--fg-interactive-hover)",
          "data-[focused]:text-(--fg-interactive)",
        ],
        props.variant === "subtle" && [
          "text-(--fg-subtle)",
          "data-[hovered]:text-(--fg-base)",
          "data-[focused]:text-(--fg-subtle)",
        ],
        props.variant === "muted" && [
          "text-(--fg-muted)",
          "data-[hovered]:text-(--fg-subtle)",
          "data-[focused]:text-(--fg-muted)",
        ],
      )}
      style={{ ...typography[".txt-compact-small-plus"] }}
      href={props.href}
      isDisabled={props.isDisabled}
    >
      {props.children}
    </Link>
  );
};
