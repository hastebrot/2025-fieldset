// https://github.com/medusajs/medusa/blob/v2.8.4/packages/admin/dashboard/src/components/common/file-preview/file-preview.tsx
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/admin/dashboard/src/components/common/file-upload/file-upload.tsx
// https://react-spectrum.adobe.com/react-aria/FileTrigger.html
// https://react-spectrum.adobe.com/react-aria/DropZone.html

export type SysFilePreviewProps = {
  children?: React.ReactNode;
};

export const SysFilePreview = (props: SysFilePreviewProps) => {
  return <div>{props.children}</div>;
};
