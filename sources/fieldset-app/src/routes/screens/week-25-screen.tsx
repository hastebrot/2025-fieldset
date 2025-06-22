import { SysFilePreview, SysFileUploadArea } from "../../components/system/sys-file-field";
import { SysSearchModal } from "../../components/system/sys-search-modal";
import { SysTabs, SysTabsItem, SysTabsList, SysTabsPanel } from "../../components/system/sys-tabs";
import { SysText } from "../../components/system/sys-text";
import { Story, StoryLayout } from "../layouts/story-layout";

export const Week25Screen = () => {
  return (
    <StoryLayout>
      <Story className="p-[16px] flex flex-col gap-2">
        <SysTabs defaultValue="general">
          <SysTabsList>
            <SysTabsItem value="general" status="completed">
              General
            </SysTabsItem>
            <SysTabsItem value="shipping" status="in-progress">
              Shipping
            </SysTabsItem>
            <SysTabsItem value="payment" status="not-started">
              Payment
            </SysTabsItem>
          </SysTabsList>
          <div className="mt-2">
            <SysTabsPanel value="general">
              <SysText size="small">General content.</SysText>
            </SysTabsPanel>
            <SysTabsPanel value="shipping">
              <SysText size="small">Shipping content.</SysText>
            </SysTabsPanel>
            <SysTabsPanel value="payment">
              <SysText size="small">Payment content.</SysText>
            </SysTabsPanel>
          </div>
        </SysTabs>
      </Story>
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
