import { SysFilePreview, SysFileUploadArea } from "../../components/system/sys-file-field";
import { SysSearchModal } from "../../components/system/sys-search-modal";
import { Story, StoryLayout } from "../layouts/story-layout";

export const Week25Screen = () => {
  return (
    <StoryLayout>
      <Story className="p-[16px] flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-[calc(500px+8px)]">
          <SysSearchModal />
        </div>
      </Story>
      <Story className="p-[16px] flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-[calc(500px+8px)]">
          <SysFilePreview label="filename.png" description="30.48 KB" />
          <SysFilePreview label="filename.png" loadingText="Preprocessing..." />
          <SysFilePreview label="filename.png" errorText="File exceeds size limit." />
          <SysFileUploadArea
            label="Import files"
            hint="Drag and drop files here or click to upload"
          />
          <SysFileUploadArea
            label="Import files"
            hint="Drag and drop files here or click to upload"
            isDisabled
          />
        </div>
      </Story>
    </StoryLayout>
  );
};
