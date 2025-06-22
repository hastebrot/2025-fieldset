import type { DropEvent, DropItem } from "@react-types/shared";
import { Button, DropZone, FileTrigger } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysIcon } from "./sys-icon";
import { SysIconButton } from "./sys-icon-button";
import { SysText } from "./sys-text";

// https://github.com/medusajs/medusa/blob/v2.8.4/packages/admin/dashboard/src/components/common/file-preview/file-preview.tsx
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/admin/dashboard/src/components/common/file-upload/file-upload.tsx
// https://react-spectrum.adobe.com/react-aria/FileTrigger.html
// https://react-spectrum.adobe.com/react-aria/DropZone.html
// https://github.com/adobe/react-spectrum/blob/react-aria-components%401.10.0/packages/react-aria-components/src/FileTrigger.tsx

export type SysFilePreviewProps = {
  label: string;
  description?: string;
  loadingText?: string;
  errorText?: string;
};

export const SysFilePreview = (props: SysFilePreviewProps) => {
  return (
    <div
      className={classNames(
        "grid px-2 py-2 rounded-md h-[56px]",
        "bg-(--bg-component) shadow-(--elevation-card-rest)",
      )}
    >
      <div className="flex flex-row items-center justify-between gap-2">
        <div className="flex flex-row items-center gap-3">
          <div className="ml-1 flex items-center justify-center w-[26px] h-[32px] bg-(--bg-switch-off) border border-(--alpha-250) rounded-md">
            <SysIcon
              className="text-(--fg-subtle)"
              name="photo"
              variant="outlined"
              width={14}
              strokeWidth={2}
            />
          </div>
          <div className="flex flex-col justify-center">
            <SysText size="small">
              <span className="truncate max-w-[260px]">{props.label}</span>
            </SysText>
            <SysText size="xsmall">
              {props.description && <span className="text-(--fg-subtle)">{props.description}</span>}
              {props.loadingText && (
                <span className="text-(--fg-interactive)">{props.loadingText}</span>
              )}
              {props.errorText && <span className="text-(--fg-error)">{props.errorText}</span>}
            </SysText>
          </div>
        </div>
        <div className="flex flex-row items-center gap-1">
          {props.description && (
            <SysIconButton variant="ghost" size="small">
              <SysIcon name="dots" variant="outlined" width={15} strokeWidth={2} />
            </SysIconButton>
          )}
          {props.description && (
            <SysIconButton variant="ghost" size="small">
              <SysIcon name="download" variant="outlined" width={15} strokeWidth={2} />
            </SysIconButton>
          )}
          <SysIconButton variant="ghost" size="small">
            <SysIcon name="x" variant="outlined" width={15} strokeWidth={2} />
          </SysIconButton>
        </div>
      </div>
    </div>
  );
};

export type SysFileUploadAreaProps = {
  label: string;
  hint?: string;
  isError?: boolean;
  isDisabled?: boolean;
  onFileDrop?: (event: DropEvent) => void;
  onFileSelect?: (fileList: FileList | null) => void;
};

export const SysFileUploadArea = (props: SysFileUploadAreaProps) => {
  return (
    <DropZone
      className={classNames(
        "group bg-(--bg-component) border-(--border-strong) border border-dashed rounded-lg otline-none",
        "data-[drop-target]:border-(--border-interactive)",
        "data-[hovered]:border-(--border-interactive)",
        "data-[focused]:border-(--border-interactive)",
        "data-[focused]:shadow-(--borders-focus)",
        "data-[focused]:border-solid",
        props.isError && "!border-(--border-error)",
      )}
      onDrop={props.onFileDrop}
      isDisabled={props.isDisabled}
    >
      <FileTrigger onSelect={props.onFileSelect}>
        <Button
          className={classNames(
            "w-full flex flex-col items-center gap-y-2 p-8",
            "outline-none cursor-pointer",
            "group-data-[disabled]:cursor-auto",
          )}
          isDisabled={props.isDisabled}
        >
          <div className="flex items-center gap-x-2 text-(--fg-subtle) group-data-[disabled]:text-(--fg-disabled)">
            <SysIcon name="download" variant="outlined" width={15} strokeWidth={2} />
            {props.label}
          </div>
          {props.hint && (
            <SysText size="small">
              <span className="text-(--fg-muted) group-data-[disabled]:text-(--fg-disabled)">
                {props.hint}
              </span>
            </SysText>
          )}
        </Button>
      </FileTrigger>
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
