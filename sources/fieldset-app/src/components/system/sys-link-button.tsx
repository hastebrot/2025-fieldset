// https://www.figma.com/community/file/1278648465968635936/medusa-ui
// medusa ui (link button), https://www.figma.com/design/IJ5XCsUaGcHC99cTZNh8xt/Medusa-UI--Community-?node-id=5844-10734
// ludvig rask (design), https://x.com/ludvigrask

export type SysLinkButtonProps = {
  children?: React.ReactNode;
};

export const SysLinkButton = (props: SysLinkButtonProps) => {
  return <div>{props.children}</div>;
};
