import { Input } from "react-aria-components";
import { classNames } from "../../helpers/clsx";
import { typography } from "./sys-tokens";

export type SysTextInputProps = {
  placeholder?: string;
  defaultValue?: string;
  value?: string;
  onValueChange?: (value: string) => void;
  type?: "text" | "password";
  size?: "base" | "small";
  isDisabled?: boolean;
  isInvalid?: boolean;
};

export const SysTextInput = (props: SysTextInputProps) => {
  return (
    <div className="relative">
      <Input
        className={classNames(
          "w-full appearance-none rounded-md outline-none",
          "caret-(--fg-base) bg-(--bg-field) data-[hovered]:bg-(--bg-field-hover)",
          "shadow-(--borders-base) placeholder-(--fg-muted) text-(--fg-base)",
          "focus-visible:shadow-(--borders-interactive-with-active)",
          "data-[disabled]:text-(--fg-disabled) data-[disabled]:!bg-(--bg-disabled)",
          "data-[disabled]:placeholder-(--fg-disabled) data-[disabled]:cursor-not-allowed",
          "aria-[invalid=true]:!shadow-(--borders-error) invalid:!shadow-(--borders-error)",
          [
            "[&::--webkit-search-cancel-button]:hidden",
            "[&::-webkit-search-cancel-button]:hidden",
            "[&::-webkit-search-decoration]:hidden",
          ],
          [props.size === undefined && "h-8 px-2 py-1.5"],
          [props.size === "base" && "h-8 px-2 py-1.5"],
          [props.size === "small" && "h-y px-2 py-1"],
          props.type === "password" && "!font-[Inter,_sans-serif]",
        )}
        style={{
          ...(props.size === undefined && typography[".txt-compact-small"]),
          ...(props.size === "base" && typography[".txt-compact-small"]),
          ...(props.size === "small" && typography[".txt-compact-small"]),
        }}
        type={props.type ?? "text"}
        placeholder={props.placeholder}
        defaultValue={props.defaultValue}
        value={props.value}
        onChange={(event) => props.onValueChange && props.onValueChange(event.target.value)}
        disabled={props.isDisabled}
        aria-invalid={props.isInvalid}
      />
    </div>
  );
};
