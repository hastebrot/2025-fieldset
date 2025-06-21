import { useState } from "react";
import { Button, Group, Input } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { SysIcon } from "./sys-icon";
import { typography } from "./sys-tokens";

// https://docs.medusajs.com/ui/components/input
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/design-system/ui/src/components/input/input.tsx
// https://react-spectrum.adobe.com/react-aria/TextField.html

export type SysTextInputProps = {
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  type?: "text" | "password";
  size?: "base" | "small";
  isDisabled?: boolean;
  isInvalid?: boolean;
  isFieldComponent?: boolean;
};

export const SysTextInput = (props: SysTextInputProps) => {
  const [inputType, setInputType] = useState(props.type ?? "text");
  const onShowPasswordButtonPress = () => {
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <Group className="relative">
      <Input
        className={classNames(
          "w-full appearance-none rounded-md outline-none",
          "bg-(--bg-field) shadow-(--borders-base)",
          "placeholder-(--fg-muted) text-(--fg-base) caret-(--fg-base)",
          "data-[focused]:!shadow-(--borders-interactive-with-active)",
          "data-[hovered]:bg-(--bg-field-hover)",
          "data-[disabled]:text-(--fg-disabled)",
          "data-[disabled]:!bg-(--bg-disabled)",
          "data-[disabled]:placeholder-(--fg-disabled)",
          "data-[disabled]:cursor-not-allowed",
          "aria-[invalid=true]:!shadow-(--borders-error)",
          "invalid:!shadow-(--borders-error)",
          [
            "[&::--webkit-search-cancel-button]:hidden",
            "[&::-webkit-search-cancel-button]:hidden",
            "[&::-webkit-search-decoration]:hidden",
          ],
          [props.size === undefined && "h-8 px-2 py-1.5"],
          [props.size === "base" && "h-8 px-2 py-1.5"],
          [props.size === "small" && "h-7 px-2 py-1"],
          props.type === "password" && "pr-10", // px-8 and px-2.
          inputType === "password" && "!font-[Inter,_sans-serif]",
          props.isFieldComponent && [
            "!bg-(--bg-field-component)",
            "data-[hovered]:!bg-(--bg-field-component-hover)",
          ],
        )}
        style={{
          ...(props.size === undefined && typography[".txt-compact-small"]),
          ...(props.size === "base" && typography[".txt-compact-small"]),
          ...(props.size === "small" && typography[".txt-compact-small"]),
        }}
        type={inputType}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        value={props.value}
        onChange={(event) => props.onValueChange && props.onValueChange(event.target.value)}
        disabled={props.isDisabled}
        aria-invalid={props.isInvalid}
      />
      {props.type === "password" && (
        <div
          className={classNames(
            "absolute right-0 bottom-0 h-full flex items-center justify-center",
            "border-l border-(--border-base)",
            [props.size === undefined && "h-8 w-8"],
            [props.size === "base" && "h-8 w-8"],
            [props.size === "small" && "h-8 w-7"],
          )}
        >
          <Button
            className={classNames(
              "flex items-center justify-center",
              "cursor-pointer h-fit w-fit rounded-sm outline-none",
              "text-(--fg-muted)",
              "data-[hovered]:text-(--fg-base)",
              "data-[pressed]:text-(--fg-base)",
              "data-[focus-visible]:text-(--fg-base)",
              "data-[focus-visible]:shadow-(--borders-interactive-with-focus)",
              "data-[disabled]:text-(--fg-disabled)",
              "data-[disabled]:cursor-not-allowed",
            )}
            type="button"
            onPress={onShowPasswordButtonPress}
            isDisabled={props.isDisabled}
          >
            {inputType === "password" && <SysIcon name="eye" variant="outlined" width={16} />}
            {inputType === "text" && <SysIcon name="eye-off" variant="outlined" width={16} />}
          </Button>
        </div>
      )}
    </Group>
  );
};
