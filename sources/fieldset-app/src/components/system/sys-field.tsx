// https://github.com/medusajs/medusa/blob/v2.8.4/packages/design-system/ui/src/components/hint/hint.tsx
// https://docs.medusajs.com/ui/components/label
// https://docs.medusajs.com/ui/components/heading
// https://docs.medusajs.com/ui/components/text

import { classNames } from "../../helpers/clsx";
import { typography } from "./sys-tokens";

export type SysComponentProps = {
  children?: React.ReactNode;
  className?: string;
};

export const SysComponent = (props: SysComponentProps) => {
  return (
    <div
      className={classNames(
        props.className,
        "grid gap-y-1.5 py-1.5 rounded-xl",
        "bg-(--bg-component) shadow-(--elevation-card-rest)",
      )}
    >
      {props.children}
    </div>
  );
};

export type SysFieldComponentProps = {
  children?: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export const SysFieldComponent = (props: SysFieldComponentProps) => {
  const Component = props.as ?? "div";

  return (
    <Component
      className={classNames(
        props.className,
        "flex items-center gap-x-2 px-2 rounded-md outline-none",
        "bg-(--bg-field-component) shadow-(--borders-base)",
      )}
      style={{
        ...typography[".txt-compact-small"],
      }}
    >
      {props.children}
    </Component>
  );
};
