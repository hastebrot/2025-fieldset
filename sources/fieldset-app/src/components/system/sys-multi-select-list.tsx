// admin components, https://github.com/medusajs/medusa/tree/v2.8.4/packages/admin/dashboard/src/components
// admin routes, https://github.com/medusajs/medusa/tree/v2.8.4/packages/admin/dashboard/src/routes
// https://react-spectrum.adobe.com/react-aria/ComboBox.html
// https://react-spectrum.adobe.com/react-aria/TagGroup.html

import { SysButton } from "./sys-button";
import { SysComponent, SysFieldComponent } from "./sys-field";
import { SysIcon } from "./sys-icon";
import { SysIconButton } from "./sys-icon-button";
import { SysSelect, SysSelectItem } from "./sys-select-field";
import { SysSeparator } from "./sys-separator";
import { SysText } from "./sys-text";

export type SysMultiSelectListProps = {
  children?: React.ReactNode;
};

export const SysMultiSelectList = (props: SysMultiSelectListProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      {props.children}
      <header className="flex items-center justify-between gap-x-4">
        <div className="flex flex-col">
          <div className="flex items-baseline gap-x-1">
            <SysText size="small">Targets</SysText>
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
        <SysComponent>
          <div className="flex flex-col gap-y-1.5 px-1.5">
            <SysSelect isFieldComponent defaultValue="products">
              <SysSelectItem value="products" label="Products" />
            </SysSelect>
          </div>
          <div className="flex items-center gap-1.5 px-1.5">
            <SysFieldComponent
              className="flex-1 py-1.5 text-(--fg-muted) cursor-pointer"
              as="button"
            >
              <SysIcon name="search" variant="outlined" width={16} strokeWidth={2} />
              Search for products
            </SysFieldComponent>
            <SysButton variant="outlined">Browse</SysButton>
          </div>
          <div className="flex flex-col gap-y-1.5">
            <SysSeparator variant="dashed" />
            <div className="flex flex-col gap-y-1.5 px-1.5">
              <SysFieldComponent className="justify-between py-0.5 pr-1">
                <span>Product 1</span>
                <div className="flex items-center">
                  <SysIconButton size="small" variant="ghost">
                    <SysIcon name="edit" variant="outlined" width={15} strokeWidth={2} />
                  </SysIconButton>
                  <SysIconButton size="small" variant="ghost">
                    <SysIcon name="x" variant="outlined" width={15} strokeWidth={2} />
                  </SysIconButton>
                </div>
              </SysFieldComponent>
              <SysFieldComponent className="justify-between py-0.5 pr-1">
                <span>Product 2</span>
                <div className="flex items-center">
                  <SysIconButton size="small" variant="ghost">
                    <SysIcon name="edit" variant="outlined" width={15} strokeWidth={2} />
                  </SysIconButton>
                  <SysIconButton size="small" variant="ghost">
                    <SysIcon name="x" variant="outlined" width={15} strokeWidth={2} />
                  </SysIconButton>
                </div>
              </SysFieldComponent>
            </div>
          </div>
        </SysComponent>
      </section>
    </div>
  );
};
