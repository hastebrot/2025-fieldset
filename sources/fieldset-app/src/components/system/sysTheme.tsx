import { createContext, useContext } from "react";
import { classNames } from "../../helpers/clsx";
import { colors, effects, typography } from "./sysTokens";

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
};

export const SysTheme = (props: SysThemeProps) => {
  const valueOfContext = useSysTheme();
  const value = props.value ?? valueOfContext;

  return (
    <SysThemeContext value={value}>
      <div
        className={classNames(props.className, "bg-(--bg-base) text-(--fg-base)")}
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
