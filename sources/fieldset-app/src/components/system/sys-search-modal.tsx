// https://github.com/medusajs/medusa/blob/v2.8.4/packages/admin/dashboard/src/components/search/search.tsx
// https://react-spectrum.adobe.com/react-aria/Autocomplete.html
// https://react-spectrum.adobe.com/react-aria/examples/command-palette.html

export type SysSearchModalProps = {
  children?: React.ReactNode;
};

export const SysSearchModal = (props: SysSearchModalProps) => {
  return <div>{props.children}</div>;
};
