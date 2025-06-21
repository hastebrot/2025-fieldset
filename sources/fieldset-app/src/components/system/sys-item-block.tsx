// https://github.com/medusajs/medusa/blob/v2.8.4/www/apps/user-guide/app/products/page.mdx
// https://github.com/medusajs/medusa/blob/v2.8.4/www/apps/user-guide/app/products/collections/page.mdx
// https://github.com/medusajs/medusa/blob/v2.8.4/www/apps/user-guide/app/products/create/page.mdx
// https://github.com/medusajs/medusa/blob/v2.8.4/www/apps/user-guide/app/products/create/multi-part/page.mdx

export type SysItemBlockProps = {
  children?: React.ReactNode;
};

export const SysItemBlock = (props: SysItemBlockProps) => {
  return <div>{props.children}</div>;
};
