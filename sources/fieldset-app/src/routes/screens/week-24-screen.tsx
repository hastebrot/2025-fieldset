import {
  getLocalTimeZone,
  parseDate,
  parseDateTime,
  startOfMonth,
  today,
} from "@internationalized/date";
import { SysButtonGroup, SysButtonGroupItem } from "../../components/system/sys-button-group";
import { SysCalendar } from "../../components/system/sys-calendar";
import {
  SysBlockAttributeFilter,
  SysBlockAttributeSearchFilter,
  SysBlockAttributeValueList,
  SysConditionBlock,
  SysConditionSplitBlock,
} from "../../components/system/sys-condition-block";
import { SysCurrencyInput } from "../../components/system/sys-currency-field";
import { SysDatePicker, SysDatePickerPopover } from "../../components/system/sys-date-field";
import { SysIcon } from "../../components/system/sys-icon";
import { SysBlockAttributeFields, SysItemBlock } from "../../components/system/sys-item-block";
import {
  SysSelect,
  SysSelectItem,
  SysSelectSection,
  SysSelectSeparator,
} from "../../components/system/sys-select-field";
import { SysSeparator } from "../../components/system/sys-separator";
import { SysSwitch } from "../../components/system/sys-switch";
import { SysTextInput } from "../../components/system/sys-text-field";
import { Story, StoryLayout } from "../layouts/story-layout";

export const Week24Screen = () => {
  return (
    <StoryLayout>
      <Story className="p-[16px] flex flex-row gap-10">
        <div className="flex flex-col gap-2">
          <SysSwitch>Label</SysSwitch>
          <SysSwitch defaultSelected>Label</SysSwitch>
          <SysSwitch isDisabled>Label</SysSwitch>
          <SysSwitch isDisabled defaultSelected>
            Label
          </SysSwitch>
        </div>
        <div className="flex flex-col gap-2">
          <SysSwitch size="small">Label</SysSwitch>
          <SysSwitch size="small" defaultSelected>
            Label
          </SysSwitch>
          <SysSwitch size="small" isDisabled>
            Label
          </SysSwitch>
          <SysSwitch size="small" isDisabled defaultSelected>
            Label
          </SysSwitch>
        </div>
        <div className="flex flex-col gap-2 items-start">
          <SysButtonGroup>
            <SysButtonGroupItem>Label</SysButtonGroupItem>
            <SysButtonGroupItem iconSlot={<SysIcon name="x" variant="outlined" width={16} />} />
          </SysButtonGroup>
          <SysButtonGroup>
            <SysButtonGroupItem>Label</SysButtonGroupItem>
            <SysButtonGroupItem>Label</SysButtonGroupItem>
            <SysButtonGroupItem iconSlot={<SysIcon name="edit" variant="outlined" width={16} />} />
            <SysButtonGroupItem iconSlot={<SysIcon name="x" variant="outlined" width={16} />} />
          </SysButtonGroup>
          <SysButtonGroup>
            <SysButtonGroupItem isDisabled>Label</SysButtonGroupItem>
            <SysButtonGroupItem isDisabled>Label</SysButtonGroupItem>
            <SysButtonGroupItem isDisabled>Label</SysButtonGroupItem>
            <SysButtonGroupItem
              isDisabled
              iconSlot={<SysIcon name="x" variant="outlined" width={16} />}
            />
          </SysButtonGroup>
        </div>
      </Story>
      <Story className="p-[16px] flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-[250px]">
          <SysSeparator variant="solid" />
          <SysSeparator variant="solid" />
        </div>
        <div className="flex flex-col gap-2 w-[250px]">
          <SysSeparator variant="dashed" />
          <SysSeparator variant="dashed" />
        </div>
      </Story>
      <Story className="p-[16px] flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-[calc(500px+8px)]">
          <SysItemBlock>
            <SysBlockAttributeFields />
          </SysItemBlock>
        </div>
      </Story>
      <Story className="p-[16px] flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-[calc(500px+8px)]">
          <SysConditionBlock>
            <SysBlockAttributeFilter />
          </SysConditionBlock>
          <SysConditionBlock>
            <SysBlockAttributeFilter isAttributeReadonly isOperatorReadonly />
          </SysConditionBlock>
          <SysConditionBlock>
            <SysBlockAttributeFilter isAttributeReadonly isOperatorHidden />
          </SysConditionBlock>
        </div>
      </Story>
      <Story className="p-[16px] flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-[calc(500px+8px)]">
          <SysConditionSplitBlock
            filterSlot={<SysBlockAttributeSearchFilter />}
            listSlot={<SysBlockAttributeValueList />}
          />
        </div>
      </Story>
      <Story className="p-[16px] flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-[250px]">
          <SysSelect placeholder="Placeholder">
            <SysSelectItem value="option-1" label="Option 1" />
            <SysSelectItem value="option-2" label="Option 2" />
          </SysSelect>
          <SysSelect defaultValue="option-1" placeholder="Placeholder">
            <SysSelectItem value="option-1" label="Option 1" />
            <SysSelectItem value="option-2" label="Option 2" />
          </SysSelect>
          <SysSelect isDisabled defaultValue="option-1" placeholder="Placeholder" />
        </div>
        <div className="flex flex-col gap-2 w-[250px]">
          <SysSelect placeholder="Placeholder">
            <SysSelectItem value="no-option" label="No option" />
            <SysSelectSeparator />
            <SysSelectSection label="Section A">
              <SysSelectItem value="option-1" label="Option 1" />
              <SysSelectItem value="option-2" label="Option 2" />
            </SysSelectSection>
            <SysSelectSection label="Section B">
              <SysSelectItem value="option-3" label="Option 3" />
              <SysSelectItem value="option-4" label="Option 4" />
            </SysSelectSection>
          </SysSelect>
          <SysSelect defaultValue="option-1" placeholder="Placeholder">
            <SysSelectItem value="no-option" label="No option" />
            <SysSelectSeparator />
            <SysSelectSection label="Section A">
              <SysSelectItem value="option-1" label="Option 1" />
              <SysSelectItem value="option-2" label="Option 2" />
            </SysSelectSection>
            <SysSelectSection label="Section B">
              <SysSelectItem value="option-3" label="Option 3" />
              <SysSelectItem value="option-4" label="Option 4" />
            </SysSelectSection>
          </SysSelect>
          <SysSelect isDisabled defaultValue="option-1" placeholder="Placeholder" />
        </div>
      </Story>
      <Story className="p-[16px] flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-[250px]">
          <SysTextInput placeholder="Placeholder" />
          <SysTextInput defaultValue="Text" />
          <SysTextInput defaultValue="Text" isDisabled />
        </div>
        <div className="flex flex-col gap-2 w-[250px]">
          <SysTextInput type="password" placeholder="Placeholder" />
          <SysTextInput type="password" defaultValue="supersecret" />
          <SysTextInput type="password" defaultValue="supersecret" isDisabled />
        </div>
      </Story>
      <Story className="p-[16px] flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-[250px]">
          <SysCurrencyInput code="USD" symbol="$" placeholder="Placeholder" />
          <SysCurrencyInput code="USD" symbol="$" defaultValue={12345} />
          <SysCurrencyInput code="USD" symbol="$" defaultValue={12345} isDisabled />
        </div>
        <div className="flex flex-col gap-2 w-[250px]">
          <SysCurrencyInput locale="de-DE" code="EUR" symbol="€" placeholder="Placeholder" />
          <SysCurrencyInput locale="de-DE" code="EUR" symbol="€" defaultValue={12345} />
          <SysCurrencyInput locale="de-DE" code="EUR" symbol="€" defaultValue={12345} isDisabled />
        </div>
      </Story>
      <Story className="p-[16px] flex flex-row gap-2">
        <SysCalendar locale="en-US" defaultValue={parseDate("2000-02-01")} firstDayOfWeek="sun" />
        <SysCalendar
          locale="de-DE"
          defaultValue={startOfMonth(today(getLocalTimeZone()))}
          firstDayOfWeek="mon"
          showOutsideMonth
        />
      </Story>
      <Story className="p-[16px] flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-[250px]">
          <SysDatePicker locale="en-US">
            <SysDatePickerPopover>
              <SysCalendar />
            </SysDatePickerPopover>
          </SysDatePicker>
          <SysDatePicker locale="en-US" defaultValue={parseDate("2000-02-20")}>
            <SysDatePickerPopover>
              <SysCalendar />
            </SysDatePickerPopover>
          </SysDatePicker>
          <SysDatePicker isDisabled locale="en-US" defaultValue={parseDate("2000-02-20")} />
        </div>
        <div className="flex flex-col gap-2 w-[250px]">
          <SysDatePicker locale="de-DE">
            <SysDatePickerPopover>
              <SysCalendar />
            </SysDatePickerPopover>
          </SysDatePicker>
          <SysDatePicker locale="de-DE" defaultValue={parseDate("2000-02-20")}>
            <SysDatePickerPopover>
              <SysCalendar />
            </SysDatePickerPopover>
          </SysDatePicker>
          <SysDatePicker isDisabled locale="de-DE" defaultValue={parseDate("2000-02-20")} />
        </div>
      </Story>
      <Story className="p-[16px] flex flex-row gap-2">
        <div className="flex flex-col gap-2 w-[250px]">
          <SysDatePicker locale="en-US" granularity="minute">
            <SysDatePickerPopover>
              <SysCalendar />
            </SysDatePickerPopover>
          </SysDatePicker>
          <SysDatePicker locale="en-US" defaultValue={parseDateTime("2023-02-01T20:30:45")}>
            <SysDatePickerPopover>
              <SysCalendar />
            </SysDatePickerPopover>
          </SysDatePicker>
          <SysDatePicker
            isDisabled
            locale="en-US"
            defaultValue={parseDateTime("2023-02-01T20:30:45")}
          />
        </div>
        <div className="flex flex-col gap-2 w-[250px]">
          <SysDatePicker locale="de-DE" granularity="minute">
            <SysDatePickerPopover>
              <SysCalendar />
            </SysDatePickerPopover>
          </SysDatePicker>
          <SysDatePicker locale="de-DE" defaultValue={parseDateTime("2023-02-01T20:30:45")}>
            <SysDatePickerPopover>
              <SysCalendar />
            </SysDatePickerPopover>
          </SysDatePicker>
          <SysDatePicker
            isDisabled
            locale="de-DE"
            defaultValue={parseDateTime("2023-02-01T20:30:45")}
          />
        </div>
      </Story>
    </StoryLayout>
  );
};
