import { Group, I18nProvider, Input, Label, NumberField } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { typography } from "./sys-tokens";

// https://docs.medusajs.com/ui/components/currency-input
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/design-system/ui/src/components/currency-input/currency-input.tsx
// https://react-spectrum.adobe.com/react-aria/NumberField.html

export type SysCurrencyInputProps = {
  placeholder?: string;
  defaultValue?: number;
  value?: number;
  onValueChange?: (value: number) => void;
  size?: "base" | "small";
  symbol?: string;
  code?: string;
  isDisabled?: boolean;
  isInvalid?: boolean;
  locale?: string;
  fixedDecimalLength?: number;
};

export const SysCurrencyInput = (props: SysCurrencyInputProps) => {
  return (
    <I18nProvider locale={props.locale ?? "en-US"}>
      <NumberField
        className={classNames(
          "group w-full appearance-none rounded-md outline-none overflow-hidden",
          "bg-(--bg-field) has-data-[hovered]:bg-(--bg-field-hover)",
          "shadow-(--borders-base) placeholder-(--fg-muted) text-(--fg-base)",
          "has-data-[focused]:!shadow-(--borders-interactive-with-active)",
          "data-[disabled]:text-(--fg-disabled) data-[disabled]:!bg-(--bg-disabled)",
          "data-[disabled]:placeholder-(--fg-disabled) data-[disabled]:cursor-not-allowed",
        )}
        style={{
          ...(props.size === undefined && typography[".txt-compact-small"]),
          ...(props.size === "base" && typography[".txt-compact-small"]),
          ...(props.size === "small" && typography[".txt-compact-small"]),
        }}
        defaultValue={props.defaultValue}
        value={props.value}
        onChange={props.onValueChange}
        isDisabled={props.isDisabled}
        isInvalid={props.isInvalid}
        formatOptions={{
          localeMatcher: "best fit",
          style: "decimal",
          minimumFractionDigits: props.fixedDecimalLength ?? 2,
          maximumFractionDigits: props.fixedDecimalLength ?? 2,
        }}
      >
        <Group className="relative flex flex-row items-center gap-2 cursor-text">
          <Label
            role="presentation"
            className={classNames(
              "shrink-0 flex items-center justify-center w-fit min-w-[32px]",
              "border-r border-(--border-base) cursor-text",
              [props.size === undefined && "h-8 px-2 py-1.5"],
              [props.size === "base" && "h-8 px-2 py-1.5"],
              [props.size === "small" && "h-y px-2 py-1"],
            )}
          >
            <span
              className={classNames(
                "text-(--fg-muted) pointer-events-none select-none",
                "data-[disabled]:text-(--fg-disabled)",
              )}
            >
              {props.code}
            </span>
          </Label>
          <Input
            className={classNames(
              "flex-1 text-right h-full w-full outline-none appearance-none",
              "bg-transparent caret-(--fg-base) group-data-[disabled]:cursor-not-allowed",
              [props.size === undefined && "h-8 py-1.5"],
              [props.size === "base" && "h-8 py-1.5"],
              [props.size === "small" && "h-y py-1"],
            )}
            style={{
              ...(props.size === undefined && typography[".txt-compact-small"]),
              ...(props.size === "base" && typography[".txt-compact-small"]),
              ...(props.size === "small" && typography[".txt-compact-small"]),
            }}
            placeholder={props.placeholder}
          />
          <Label
            role="presentation"
            className={classNames(
              "shrink-0 flex items-center justify-center w-fit min-w-[32px]",
              "border-l border-(--border-base) cursor-text",
              [props.size === undefined && "h-8 px-2 py-1.5"],
              [props.size === "base" && "h-8 px-2 py-1.5"],
              [props.size === "small" && "h-y px-2 py-1"],
            )}
          >
            <span
              className={classNames(
                "text-(--fg-muted) pointer-events-none select-none",
                "group-data-[disabled]:text-(--fg-disabled)",
              )}
            >
              {props.symbol}
            </span>
          </Label>
        </Group>
      </NumberField>
    </I18nProvider>
  );
};
