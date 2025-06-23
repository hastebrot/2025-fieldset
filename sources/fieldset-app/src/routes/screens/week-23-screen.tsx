import { Fragment } from "react";
import { SysAlert } from "../../components/system/sys-alert";
import { SysBadge } from "../../components/system/sys-badge";
import { SysButton } from "../../components/system/sys-button";
import { SysCheckbox, SysCheckboxGroup } from "../../components/system/sys-checkbox-field";
import {
  SysCommandBar,
  SysCommandBarButton,
  SysCommandBarSeparator,
  SysCommandBarText,
} from "../../components/system/sys-command-bar";
import {
  SysDrawerModal,
  SysDrawerModalBody,
  SysDrawerModalFooter,
  SysDrawerModalHeader,
  SysDrawerModalTrigger,
} from "../../components/system/sys-drawer-modal";
import {
  SysMenu,
  SysMenuItem,
  SysMenuPopover,
  SysMenuSeparator,
  SysMenuTrigger,
} from "../../components/system/sys-dropdown-menu";
import {
  SysFocusModal,
  SysFocusModalBody,
  SysFocusModalHeader,
  SysFocusModalTrigger,
} from "../../components/system/sys-focus-modal";
import { SysIcon } from "../../components/system/sys-icon";
import { SysIconButton } from "../../components/system/sys-icon-button";
import { SysInlineTip } from "../../components/system/sys-inline-tip";
import {
  SysProgressAccordion,
  SysProgressAccordionHeader,
  SysProgressAccordionItem,
  SysProgressAccordionPanel,
} from "../../components/system/sys-progress-accordion";
import {
  SysProgressTabs,
  SysProgressTabsItem,
  SysProgressTabsList,
  SysProgressTabsPanel,
} from "../../components/system/sys-progress-tabs";
import { SysRadio, SysRadioGroup } from "../../components/system/sys-radio-field";
import { SysStatusBadge } from "../../components/system/sys-status-badge";
import {
  SysTable,
  SysTableBody,
  SysTableCell,
  SysTableHead,
  SysTableHeaderCell,
  SysTablePager,
  SysTableRow,
  SysTableSorting,
} from "../../components/system/sys-table";
import { SysText } from "../../components/system/sys-text";
import { SysTextInput } from "../../components/system/sys-text-field";
import { Story, StoryLayout } from "../layouts/story-layout";

export const Week23Screen = () => {
  return (
    <StoryLayout>
      <Story className="p-[16px] flex gap-2">
        <SysMenuTrigger>
          <SysIconButton variant="outlined">
            <SysIcon name="dots" variant="outlined" width={18} strokeWidth={2} />
          </SysIconButton>
          <SysMenuPopover isNonModal shouldCloseOnBlur>
            <SysMenu selectionMode="none">
              <SysMenuItem
                beforeSlot={<SysIcon name="edit" variant="outlined" width={15} strokeWidth={2.5} />}
              >
                Edit
              </SysMenuItem>
              <SysMenuItem
                beforeSlot={<SysIcon name="plus" variant="outlined" width={15} strokeWidth={2.5} />}
              >
                Add
              </SysMenuItem>
              <SysMenuSeparator />
              <SysMenuItem
                beforeSlot={
                  <SysIcon name="trash" variant="outlined" width={15} strokeWidth={2.5} />
                }
              >
                Delete
              </SysMenuItem>
            </SysMenu>
          </SysMenuPopover>
        </SysMenuTrigger>
        <SysMenuTrigger>
          <SysIconButton variant="outlined">
            <SysIcon name="dots" variant="outlined" width={18} strokeWidth={2} />
          </SysIconButton>
          <SysMenuPopover isNonModal shouldCloseOnBlur>
            <SysMenu selectionMode="single" defaultSelectedKeys={["1"]}>
              <SysMenuItem name="1">No Sorting</SysMenuItem>
              <SysMenuSeparator />
              <SysMenuItem
                name="2"
                afterSlot={<span className="ml-[16px] tracking-widest">A-Z</span>}
              >
                Alphabetical
              </SysMenuItem>
              <SysMenuItem
                name="3"
                afterSlot={<span className="ml-[16px] tracking-widest">Z-A</span>}
              >
                Reverse Alphabetical
              </SysMenuItem>
              <SysMenuItem
                name="4"
                afterSlot={<span className="ml-[16px] tracking-widest">1-9</span>}
              >
                Created At - Ascending
              </SysMenuItem>
              <SysMenuItem
                name="5"
                afterSlot={<span className="ml-[16px] tracking-widest">9-1</span>}
              >
                Created At - Descending
              </SysMenuItem>
            </SysMenu>
          </SysMenuPopover>
        </SysMenuTrigger>
        <SysMenuTrigger>
          <SysIconButton variant="outlined">
            <SysIcon name="dots" variant="outlined" width={18} strokeWidth={2} />
          </SysIconButton>
          <SysMenuPopover isNonModal shouldCloseOnBlur>
            <SysMenu selectionMode="multiple" defaultSelectedKeys={["1", "2"]}>
              <SysMenuItem name="1">Blinky</SysMenuItem>
              <SysMenuItem name="2">Pinky</SysMenuItem>
              <SysMenuItem name="3">Inky</SysMenuItem>
              <SysMenuItem name="4">Clyde</SysMenuItem>
            </SysMenu>
          </SysMenuPopover>
        </SysMenuTrigger>
      </Story>
      <Story className="p-[16px] flex gap-2">
        <SysFocusModalTrigger>
          <SysButton variant="filled">Edit Variant</SysButton>
          <SysFocusModal>
            {(renderProps) => (
              <Fragment>
                <SysFocusModalHeader onCloseButtonPress={renderProps.close}>
                  <SysButton variant="filled">Save</SysButton>
                </SysFocusModalHeader>
                <SysFocusModalBody className="p-4">
                  <SysText>This is where you edit the variant's details.</SysText>
                </SysFocusModalBody>
              </Fragment>
            )}
          </SysFocusModal>
        </SysFocusModalTrigger>
        <SysDrawerModalTrigger>
          <SysButton variant="filled">Edit Variant</SysButton>
          <SysDrawerModal>
            {(renderProps) => (
              <Fragment>
                <SysDrawerModalHeader onCloseButtonPress={renderProps.close}>
                  <SysText>Edit Variant</SysText>
                </SysDrawerModalHeader>
                <SysDrawerModalBody className="p-4">
                  <SysText>This is where you edit the variant's details.</SysText>
                </SysDrawerModalBody>
                <SysDrawerModalFooter>
                  <SysButton variant="outlined">Cancel</SysButton>
                  <SysButton variant="filled">Save</SysButton>
                </SysDrawerModalFooter>
              </Fragment>
            )}
          </SysDrawerModal>
        </SysDrawerModalTrigger>
      </Story>
      <Story className="p-[16px] flex items-center gap-2">
        <div className="flex items-baseline gap-2">
          <SysText>Text</SysText>
          <SysText size="small">Text</SysText>
          <SysText family="mono">Text</SysText>
          <SysText family="mono" size="small">
            Text
          </SysText>
        </div>
        <SysIcon name="plus" variant="outlined" width={18} />
        <SysIcon name="minus" variant="outlined" width={18} />
      </Story>
      <Story className="p-[16px] flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <SysButton variant="filled">Button</SysButton>
          <SysButton variant="outlined">Button</SysButton>
          <SysButton variant="ghost">Button</SysButton>
          <SysButton variant="danger">Button</SysButton>
          <SysButton isDisabled>Button</SysButton>
          <SysButton isDisabled variant="ghost">
            Button
          </SysButton>
          <SysIconButton variant="outlined">
            <SysIcon name="plus" variant="outlined" width={18} />
          </SysIconButton>
          <SysIconButton variant="ghost">
            <SysIcon name="plus" variant="outlined" width={18} />
          </SysIconButton>
          <SysIconButton variant="outlined" isDisabled>
            <SysIcon name="plus" variant="outlined" width={18} />
          </SysIconButton>
          <SysIconButton variant="ghost" isDisabled>
            <SysIcon name="plus" variant="outlined" width={18} />
          </SysIconButton>
        </div>
        <div className="flex items-center gap-2">
          <SysButton size="small" variant="filled">
            Button
          </SysButton>
          <SysButton size="small" variant="outlined">
            Button
          </SysButton>
          <SysButton size="small" variant="ghost">
            Button
          </SysButton>
          <SysButton size="small" variant="danger">
            Button
          </SysButton>
          <SysButton size="small" isDisabled>
            Button
          </SysButton>
          <SysButton size="small" variant="ghost" isDisabled>
            Button
          </SysButton>
          <SysIconButton size="small" variant="outlined">
            <SysIcon name="plus" variant="outlined" width={18} />
          </SysIconButton>
          <SysIconButton size="small" variant="ghost">
            <SysIcon name="plus" variant="outlined" width={18} />
          </SysIconButton>
          <SysIconButton size="small" variant="outlined" isDisabled>
            <SysIcon name="plus" variant="outlined" width={18} />
          </SysIconButton>
          <SysIconButton size="small" variant="ghost" isDisabled>
            <SysIcon name="plus" variant="outlined" width={18} />
          </SysIconButton>
        </div>
      </Story>
      <Story className="p-[16px] flex flex-col gap-2">
        <SysTable>
          <SysTableHead>
            <SysTableRow>
              <SysTableHeaderCell>
                <SysCheckbox />
              </SysTableHeaderCell>
              <SysTableHeaderCell>
                <SysTableSorting defaultOrderBy="asc">Customer</SysTableSorting>
              </SysTableHeaderCell>
              <SysTableHeaderCell>
                <SysTableSorting>Article</SysTableSorting>
              </SysTableHeaderCell>
              <SysTableHeaderCell>
                <SysTableSorting>Variant</SysTableSorting>
              </SysTableHeaderCell>
              <SysTableHeaderCell>
                <div className="text-right">Price</div>
              </SysTableHeaderCell>
              <SysTableHeaderCell></SysTableHeaderCell>
            </SysTableRow>
          </SysTableHead>
          <SysTableBody>
            <SysTableRow>
              <SysTableCell>
                <SysCheckbox />
              </SysTableCell>
              <SysTableCell>
                <span className="whitespace-nowrap">Elvis Jones</span>
              </SysTableCell>
              <SysTableCell>Shirt</SysTableCell>
              <SysTableCell>
                <span className="whitespace-nowrap">Black, XL</span>
              </SysTableCell>
              <SysTableCell>
                <div className="text-right tabular-nums tracking-tight">10.00</div>
              </SysTableCell>
              <SysTableCell>
                <span className="text-(--fg-muted)">USD</span>
              </SysTableCell>
            </SysTableRow>
            <SysTableRow>
              <SysTableCell>
                <SysCheckbox />
              </SysTableCell>
              <SysTableCell>
                <span className="whitespace-nowrap">Sarah Garcia</span>
              </SysTableCell>
              <SysTableCell>Pants</SysTableCell>
              <SysTableCell>
                <span className="whitespace-nowrap">Light gray, M</span>
              </SysTableCell>
              <SysTableCell>
                <div className="text-right tabular-nums tracking-tight">20.00</div>
              </SysTableCell>
              <SysTableCell>
                <span className="text-(--fg-muted)">EUR</span>
              </SysTableCell>
            </SysTableRow>
          </SysTableBody>
        </SysTable>
        <SysTablePager
          itemCount={3}
          itemCountPerPage={2}
          pageIndex={0}
          pageCount={2}
          isPreviousPageDisabled
        />
      </Story>
      <Story className="p-[16px] inline-flex flex-col gap-2">
        <SysCommandBar>
          <SysCommandBarText>2 selected</SysCommandBarText>
          <SysCommandBarSeparator />
          <SysCommandBarButton keyboard="d">Delete</SysCommandBarButton>
          <SysCommandBarSeparator />
          <SysCommandBarButton keyboard="e">Edit</SysCommandBarButton>
        </SysCommandBar>
      </Story>
      <Story className="p-[16px] grid grid-cols-2 items-start gap-2">
        <div className="flex flex-col gap-2">
          <SysTextInput placeholder="Sales Channel Name" />
          <SysTextInput placeholder="Sales Channel Name" isDisabled />
          <SysTextInput placeholder="Sales Channel Name" isInvalid />
        </div>
        <div className="flex flex-col gap-2">
          <SysTextInput type="password" defaultValue="supersecret" />
          <SysTextInput type="password" defaultValue="supersecret" isDisabled />
          <SysTextInput type="password" defaultValue="supersecret" isInvalid />
        </div>
      </Story>
      <Story className="p-[16px] grid auto-cols-fr grid-flow-col">
        <div className="flex flex-col gap-2">
          <SysCheckbox label="Check" />
          <SysCheckbox label="Check" defaultSelected />
          <SysCheckbox label="Check" isIndeterminate />
        </div>
        <div className="flex flex-col gap-2">
          <SysCheckbox label="Check" isDisabled />
          <SysCheckbox label="Check" isDisabled defaultSelected />
          <SysCheckbox label="Check" isDisabled isIndeterminate />
        </div>
      </Story>
      <Story className="p-[16px] grid auto-cols-fr grid-flow-col">
        <div className="flex flex-col gap-2">
          <SysCheckboxGroup label="Check group" defaultValue={["1"]}>
            <SysCheckbox value="1" label="Check" />
            <SysCheckbox value="2" label="Check" />
            <SysCheckbox value="3" label="Check" isDisabled />
          </SysCheckboxGroup>
          <SysCheckboxGroup label="Check group" defaultValue={["1"]}>
            <SysCheckbox value="1" label="Check" isDisabled />
          </SysCheckboxGroup>
        </div>
        <div className="flex flex-col gap-2">
          <SysRadioGroup label="Radio group" defaultValue="1">
            <SysRadio value="1" label="Radio" />
            <SysRadio value="2" label="Radio" />
            <SysRadio value="3" label="Radio" isDisabled />
          </SysRadioGroup>
          <SysRadioGroup label="Radio group" defaultValue="1">
            <SysRadio value="1" label="Radio" isDisabled />
          </SysRadioGroup>
        </div>
      </Story>
      <Story className="p-[16px] grid grid-cols-2 items-start gap-2">
        <SysInlineTip label="Tip" variant="info">
          Medusa UI is a package of React components to be used in Medusa Admin customizations.
        </SysInlineTip>
        <SysInlineTip label="Error" variant="error">
          An error occurred. Please try again.
        </SysInlineTip>
        <SysInlineTip label="Warning" variant="warning">
          This action cannot be undone.
        </SysInlineTip>
        <SysInlineTip label="Success" variant="success">
          Product created successfully!
        </SysInlineTip>
      </Story>
      <Story className="p-[16px] flex flex-col gap-2">
        <div className="flex items-center gap-2 flex-wrap">
          <SysAlert variant="info">You are viewing Medusa docs.</SysAlert>
          <SysAlert variant="error">An error occured while updating data.</SysAlert>
          <SysAlert variant="warning">Be careful!</SysAlert>
          <SysAlert variant="success">Data updated successfully!</SysAlert>
        </div>
      </Story>
      <Story className="p-[16px] flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <SysStatusBadge color="gray">Status</SysStatusBadge>
          <SysStatusBadge color="red">Status</SysStatusBadge>
          <SysStatusBadge color="orange">Status</SysStatusBadge>
          <SysStatusBadge color="green">Status</SysStatusBadge>
          <SysStatusBadge color="blue">Status</SysStatusBadge>
          <SysStatusBadge color="purple">Status</SysStatusBadge>
        </div>
        <div className="flex items-center gap-2">
          <SysBadge color="gray">Badge</SysBadge>
          <SysBadge color="red">Badge</SysBadge>
          <SysBadge color="orange">Badge</SysBadge>
          <SysBadge color="green">Badge</SysBadge>
          <SysBadge color="blue">Badge</SysBadge>
          <SysBadge color="purple">Badge</SysBadge>
        </div>
        <div className="flex items-center gap-2">
          <SysBadge size="small" color="gray">
            Badge
          </SysBadge>
          <SysBadge size="small" color="red">
            Badge
          </SysBadge>
          <SysBadge size="small" color="orange">
            Badge
          </SysBadge>
          <SysBadge size="small" color="green">
            Badge
          </SysBadge>
          <SysBadge size="small" color="blue">
            Badge
          </SysBadge>
          <SysBadge size="small" color="purple">
            Badge
          </SysBadge>
        </div>
        <div className="flex items-center gap-2">
          <SysBadge size="xsmall" color="gray">
            Badge
          </SysBadge>
          <SysBadge size="xsmall" color="red">
            Badge
          </SysBadge>
          <SysBadge size="xsmall" color="orange">
            Badge
          </SysBadge>
          <SysBadge size="xsmall" color="green">
            Badge
          </SysBadge>
          <SysBadge size="xsmall" color="blue">
            Badge
          </SysBadge>
          <SysBadge size="xsmall" color="purple">
            Badge
          </SysBadge>
        </div>
        <div className="flex items-center gap-2">
          <SysBadge size="2xsmall" color="gray">
            Badge
          </SysBadge>
          <SysBadge size="2xsmall" color="red">
            Badge
          </SysBadge>
          <SysBadge size="2xsmall" color="orange">
            Badge
          </SysBadge>
          <SysBadge size="2xsmall" color="green">
            Badge
          </SysBadge>
          <SysBadge size="2xsmall" color="blue">
            Badge
          </SysBadge>
          <SysBadge size="2xsmall" color="purple">
            Badge
          </SysBadge>
        </div>
      </Story>
      <Story className="p-[16px] flex flex-col gap-2">
        <SysProgressTabs defaultValue="general">
          <SysProgressTabsList>
            <SysProgressTabsItem value="general" status="completed">
              General
            </SysProgressTabsItem>
            <SysProgressTabsItem value="shipping" status="in-progress">
              Shipping
            </SysProgressTabsItem>
            <SysProgressTabsItem value="payment" status="not-started">
              Payment
            </SysProgressTabsItem>
          </SysProgressTabsList>
          <div className="mt-2 px-4">
            <SysProgressTabsPanel value="general">
              <SysText size="small">General content.</SysText>
            </SysProgressTabsPanel>
            <SysProgressTabsPanel value="shipping">
              <SysText size="small">Shipping content.</SysText>
            </SysProgressTabsPanel>
            <SysProgressTabsPanel value="payment">
              <SysText size="small">Payment content.</SysText>
            </SysProgressTabsPanel>
          </div>
        </SysProgressTabs>
        <SysProgressAccordion defaultValue={["general"]}>
          <SysProgressAccordionItem value="general">
            <SysProgressAccordionHeader status="completed">General</SysProgressAccordionHeader>
            <SysProgressAccordionPanel>
              <SysText size="small">General content.</SysText>
            </SysProgressAccordionPanel>
          </SysProgressAccordionItem>
          <SysProgressAccordionItem value="shipping">
            <SysProgressAccordionHeader status="in-progress">Shipping</SysProgressAccordionHeader>
            <SysProgressAccordionPanel>
              <SysText size="small">Shipping content.</SysText>
            </SysProgressAccordionPanel>
          </SysProgressAccordionItem>
          <SysProgressAccordionItem value="payment">
            <SysProgressAccordionHeader status="not-started">Payment</SysProgressAccordionHeader>
            <SysProgressAccordionPanel>
              <SysText size="small">Payment content.</SysText>
            </SysProgressAccordionPanel>
          </SysProgressAccordionItem>
        </SysProgressAccordion>
      </Story>
    </StoryLayout>
  );
};
