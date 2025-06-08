// admin components, https://github.com/medusajs/medusa/tree/v2.8.4/packages/admin/dashboard/src/components
// admin routes, https://github.com/medusajs/medusa/tree/v2.8.4/packages/admin/dashboard/src/routes

import { classNames } from "../../helpers/clsx";
import { SysButton } from "./sys-button";
import { SysIcon } from "./sys-icon";
import { SysIconButton } from "./sys-icon-button";
import { SysSelect, SysSelectItem } from "./sys-select-field";
import { SysSeparator } from "./sys-separator";
import { SysText } from "./sys-text";
import { typography } from "./sys-tokens";

export type SysMultiSelectFieldProps = {
  children?: React.ReactNode;
};

export const SysMultiSelectField = (props: SysMultiSelectFieldProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      {props.children}
      <header className="flex items-center justify-between gap-x-4">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-x-1">
            <SysText size="base">Targets</SysText>
            <SysText size="small">
              <span className="text-(--fg-muted)">(Optional)</span>
            </SysText>
          </div>
          <SysText size="small">
            <span className="text-(--fg-subtle) text-pretty">
              Select the targets that this tax rate will apply to.
            </span>
          </SysText>
        </div>
        <div>
          <SysButton size="small" variant="ghost">
            <span className="text-(--fg-interactive) hover:text-(--fg-interactive-hover) flex-shrink-0">
              Add target
            </span>
          </SysButton>
        </div>
      </header>
      <section className="flex flex-col gap-y-3">
        <div
          className={classNames(
            "grid gap-1.5 py-1.5",
            "bg-(--bg-component) shadow-(--elevation-card-rest) rounded-xl",
          )}
        >
          <div className="text-(--fg-subtle) grid gap-1.5 px-1.5">
            <SysSelect defaultValue="products">
              <SysSelectItem value="products" label="Products" />
            </SysSelect>
          </div>
          <div className="flex items-center gap-1.5 px-1.5">
            <button
              type="button"
              className={classNames(
                "flex-1 flex items-center gap-x-2 px-2 py-1.5 rounded-md outline-none",
                "bg-(--bg-field-component) hover:(--bg-field-component-hover)",
                "text-(--fg-muted) shadow-(--borders-base)",
              )}
              style={{
                ...typography[".txt-compact-small"],
              }}
            >
              <SysIcon name="search" variant="outlined" width={16} strokeWidth={2} />
              Search for products
            </button>
            <SysButton variant="outlined">Browse</SysButton>
            <SysButton variant="outlined">Delete</SysButton>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <SysSeparator variant="dashed" />
            <div className="flex flex-col gap-y-1.5 px-1.5">
              <div
                className={classNames(
                  "flex items-center justify-between gap-2 px-2 py-0.5 pr-0.5 rounded-md",
                  "bg-(--bg-field-component) shadow-(--borders-base)",
                )}
              >
                <span>Product 1</span>
                <SysIconButton size="small" variant="ghost">
                  <SysIcon name="x" variant="outlined" width={15} strokeWidth={2} />
                </SysIconButton>
              </div>
              <div
                className={classNames(
                  "flex items-center justify-between gap-2 px-2 py-0.5 pr-0.5 rounded-md",
                  "bg-(--bg-field-component) shadow-(--borders-base)",
                )}
              >
                <span>Product 2</span>
                <SysIconButton size="small" variant="ghost">
                  <SysIcon name="x" variant="outlined" width={15} strokeWidth={2} />
                </SysIconButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
