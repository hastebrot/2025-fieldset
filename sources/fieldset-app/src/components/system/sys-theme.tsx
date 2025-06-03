import { createContext, useContext } from "react";
import { classNames } from "../../helpers/clsx";
import { colors, effects, typography } from "./sys-tokens";

export type SysThemeValue = {
  variant: "dark" | "light";
};

const defaultSysTheme: SysThemeValue = {
  variant: "dark",
};

export type SysThemeProps = {
  children?: React.ReactNode;
  className?: string;
  value?: SysThemeValue;
  variant?: SysThemeValue["variant"];
};

export const SysTheme = (props: SysThemeProps) => {
  const valueOfContext = useSysTheme();
  const value = {
    ...(props.value ?? valueOfContext),
    ...(props.variant !== undefined && { variant: props.variant }),
  };

  return (
    <SysThemeContext value={value}>
      <div
        data-theme={value.variant}
        className={classNames(
          props.className,
          "bg-(--bg-base) text-(--fg-base) border-(--border-base)",
          "[scrollbar-color:var(--border-base)_var(--bg-base)]",
        )}
        style={{
          ...typography[".txt-medium"],
          ...(value.variant === "dark" && colors.dark),
          ...(value.variant === "dark" && effects.dark),
          ...(value.variant === "light" && colors.light),
          ...(value.variant === "light" && effects.light),
        }}
      >
        {props.children}
      </div>
    </SysThemeContext>
  );
};

const SysThemeContext = createContext<SysThemeValue>(defaultSysTheme);

export const useSysTheme = (): SysThemeValue => {
  return useContext(SysThemeContext);
};
