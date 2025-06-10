import { type DropEvent, type DropItem } from "@react-types/shared";
import { Button, DropZone, FileTrigger } from "react-aria-components";
import { classNames } from "../../helpers/clsx";

// https://github.com/medusajs/medusa/blob/v2.8.4/packages/admin/dashboard/src/components/common/file-preview/file-preview.tsx
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/admin/dashboard/src/components/common/file-upload/file-upload.tsx
// https://react-spectrum.adobe.com/react-aria/FileTrigger.html
// https://react-spectrum.adobe.com/react-aria/DropZone.html
// https://github.com/adobe/react-spectrum/blob/react-aria-components%401.10.0/packages/react-aria-components/src/FileTrigger.tsx

export type SysFilePreviewProps = {
  children?: React.ReactNode;
};

export const SysFilePreview = (props: SysFilePreviewProps) => {
  return <div>{props.children}</div>;
};

export type UploadDropZoneProps = {
  isError?: boolean;
  errorText?: string;
  onFileDrop?: (event: DropEvent) => void;
  onFileSelect?: (fileList: FileList | null) => void;
};

export const UploadDropZone = (props: UploadDropZoneProps) => {
  return (
    <DropZone className={classNames("", props.isError && "")} onDrop={props.onFileDrop}>
      <div className={classNames("", props.isError && "")}></div>

      <div className="">
        <div className=""></div>

        <FileTrigger onSelect={props.onFileSelect}>
          <Button className=""></Button>
        </FileTrigger>

        {props.isError && <div className="">{props.errorText}</div>}
      </div>
    </DropZone>
  );
};

export const firstFileInDropItemsOrNull = (dropItems: DropItem[]): Promise<File | null> => {
  const item = dropItems[0];
  if (item.kind === "file") {
    return item.getFile();
  }
  return Promise.resolve(null);
};

export const firstFileInFileListOrNull = (fileList: FileList | null): File | null => {
  const file = fileList?.item(0);
  if (file) {
    return file;
  }
  return null;
};
