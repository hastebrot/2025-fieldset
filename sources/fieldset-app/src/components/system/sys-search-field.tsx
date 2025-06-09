// https://docs.medusajs.com/ui/components/input#search
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/design-system/ui/src/components/input/input.tsx

export type SysSearchInputProps = {
  children?: React.ReactNode;
};

export const SysSearchInput = (props: SysSearchInputProps) => {
  return <div>{props.children}</div>;
};
