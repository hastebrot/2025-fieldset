import { Breadcrumb, Breadcrumbs, Link } from "react-aria-components";
import { SysIcon } from "./sys-icon";
import { typography } from "./sys-tokens";

// https://github.com/medusajs/medusa/blob/v2.8.4/www/packages/docs-ui/src/components/Breadcrumbs/index.tsx
// https://react-spectrum.adobe.com/react-aria/Breadcrumbs.html

export type SysBreadcrumbsProps = {
  children?: React.ReactNode;
};

export const SysBreadcrumbs = (props: SysBreadcrumbsProps) => {
  return <Breadcrumbs className="flex items-center flex-wrap gap-1">{props.children}</Breadcrumbs>;
};

export type SysBreadcrumbProps = {
  children?: React.ReactNode;
};

export const SysBreadcrumb = (props: SysBreadcrumbProps) => {
  return (
    <Breadcrumb
      className="group flex items-center gap-1 text-(--fg-muted)"
      style={{ ...typography[".txt-compact-small"] }}
    >
      {props.children}
      <div className="group-last:hidden size-[15px] flex items-center justify-center">
        <SysIcon name="caret-right" variant="filled" height={13} strokeWidth={2} />
      </div>
    </Breadcrumb>
  );
};

export type SysLinkProps = {
  children?: React.ReactNode;
};

export const SysLink = (props: SysLinkProps) => {
  return <Link className="cursor-pointer data-[hovered]:text-(--fg-subtle)">{props.children}</Link>;
};
