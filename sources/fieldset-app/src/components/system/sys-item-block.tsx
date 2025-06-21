import { SysComponent } from "./sys-field";
import { SysIcon } from "./sys-icon";
import { SysIconButton } from "./sys-icon-button";
import { SysLabel } from "./sys-label";
import { SysSelect, SysSelectItem } from "./sys-select-field";
import { SysTextInput } from "./sys-text-field";

// inventory kits:
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/admin/dashboard/src/routes/products/product-create/components/product-create-inventory-kit-form/components/product-create-inventory-kit-section/product-create-inventory-kit-section.tsx
// https://github.com/medusajs/medusa/blob/v2.8.4/www/apps/user-guide/app/products/create/page.mdx
// https://github.com/medusajs/medusa/blob/v2.8.4/www/apps/user-guide/app/products/create/multi-part/page.mdx
// other:
// https://github.com/medusajs/medusa/blob/v2.8.4/www/apps/user-guide/app/products/page.mdx
// https://github.com/medusajs/medusa/blob/v2.8.4/www/apps/user-guide/app/products/collections/page.mdx

export type SysItemBlockProps = {
  children?: React.ReactNode;
};

export const SysItemBlock = (props: SysItemBlockProps) => {
  return (
    <div className="flex flex-col gap-y-3">
      <section className="flex flex-col gap-y-3">
        <SysComponent>
          <div className="grid grid-cols-[1fr_auto] items-center px-1.5 gap-1.5">
            <div>{props.children}</div>
            <div>
              <SysIconButton variant="ghost" size="small">
                <SysIcon name="x" variant="outlined" width={15} strokeWidth={2} />
              </SysIconButton>
            </div>
          </div>
        </SysComponent>
      </section>
    </div>
  );
};

export const SysBlockAttributeFields = () => {
  return (
    <div className="grid grid-cols-[min-content_1fr] items-center gap-1.5">
      <div className="flex items-center px-2 py-1.5">
        <SysLabel size="xsmall" weight="plus">
          <span className="text-(--fg-subtle)">Item</span>
        </SysLabel>
      </div>
      <div>
        <SysSelect isFieldComponent placeholder="Select item">
          <SysSelectItem value="item" label="Item" />
        </SysSelect>
      </div>
      <div className="flex items-center px-2 py-1.5">
        <SysLabel size="xsmall" weight="plus">
          <span className="text-(--fg-subtle)">Quantity</span>
        </SysLabel>
      </div>
      <div>
        <SysTextInput isFieldComponent placeholder="Quantity" />
      </div>
    </div>
  );
};
