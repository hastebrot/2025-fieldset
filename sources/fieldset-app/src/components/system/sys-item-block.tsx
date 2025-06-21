import { SysComponent } from "./sys-field";

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
  return <SysComponent>{props.children}</SysComponent>;
};
