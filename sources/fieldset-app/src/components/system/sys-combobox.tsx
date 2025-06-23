import { Group, Input } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysBadge } from "./sys-badge";
import { SysIcon } from "./sys-icon";

// https://github.com/medusajs/medusa/blob/v2.8.4/packages/admin/dashboard/src/components/inputs/chip-input/chip-input.tsx
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/admin/dashboard/src/routes/products/product-create/components/product-create-details-form/components/product-create-details-variant-section/product-create-details-variant-section.tsx
// https://github.com/medusajs/medusa/blob/v2.8.4/www/apps/user-guide/app/products/create/page.mdx#1-details-step

export type SysChipInputProps = {
  items?: string[];
  variant?: "base" | "contrast";
  isDisabled?: boolean;
  showRemoveButton?: boolean;
};

export const SysChipInput = ({ ...props }: SysChipInputProps) => {
  props.variant = props.variant ?? "base";

  return (
    <Group
      className={classNames(
        "flex items-center flex-wrap min-h-8 gap-1 px-2 py-1.5 rounded-md",
        "shadow-(--borders-base)",
        "data-[focus-within]:shadow-(--borders-interactive-with-active)",
        "data-[disabled]:bg-(--bg-disabled)",
        "data-[disabled]:text-(--fg-disabled)",
        "data-[disabled]:cursor-not-allowed",
        props.variant === "base" && [
          // wrap.
          "bg-(--bg-field)",
          "data-[hovered]:bg-(--bg-field-hover)",
        ],
        props.variant === "contrast" && [
          // wrap.
          "bg-(--bg-field-component)",
          "data-[hovered]:bg-(--bg-field-component-hover)",
        ],
      )}
      isDisabled={props.isDisabled}
    >
      {props.items?.map((item) => (
        <SysBadge key={item} size="2xsmall" noPadding>
          <div
            className={classNames(
              "flex items-center gap-x-0.5 px-1.5",
              props.showRemoveButton && "!pr-1",
            )}
          >
            {item}
            {props.showRemoveButton && (
              <SysIcon
                name="x"
                variant="outlined"
                width={15}
                strokeWidth={2}
                className="text-(--fg-subtle) otline-none"
              />
            )}
          </div>
        </SysBadge>
      ))}

      <Input
        className={classNames(
          "flex-1 appearance-none bg-transparent outline-none",
          "text-(--fg-base) caret-(--fg-base) placeholder-(--fg-muted)",
        )}
        autoComplete="off"
      />
    </Group>
  );
};
