import { useState } from "react";
import { useNavigate } from "react-router";
import { SysButton } from "../../components/system/sys-button";
import { SysIcon } from "../../components/system/sys-icon";
import { SysIconButton } from "../../components/system/sys-icon-button";
import { SysTheme } from "../../components/system/sys-theme";
import { SysViewport } from "../../components/system/sys-viewport";
import { useDocumentTitle, usePrefersColorScheme } from "../../helpers/react";

export type StoryLayoutProps = {
  children?: React.ReactNode;
};

export const StoryLayout = (props: StoryLayoutProps) => {
  useDocumentTitle("fieldset-app");
  const prefersColorScheme = usePrefersColorScheme();
  const [colorScheme, setColorScheme] = useState<"dark" | "light">(
    prefersColorScheme === "light" ? "light" : "dark",
  );
  const onColorSchemeButtonPress = () => {
    setColorScheme(colorScheme === "dark" ? "light" : "dark");
  };
  const navigate = useNavigate();

  return (
    <SysTheme variant={colorScheme}>
      <SysViewport className="min-h-dvh" overflowX overflowY>
        <div>
          <Story className="p-[16px] flex gap-2">
            <SysIconButton variant="outlined" onPress={onColorSchemeButtonPress}>
              <SysIcon
                name={colorScheme === "dark" ? "moon" : "sun"}
                variant="outlined"
                width={18}
                strokeWidth={2}
              />
            </SysIconButton>
            <SysButton variant="outlined" onPress={() => navigate("/week-23")}>
              week 23
            </SysButton>
            <SysButton variant="outlined" onPress={() => navigate("/week-24")}>
              week 24
            </SysButton>
          </Story>
          {props.children}
        </div>
      </SysViewport>
    </SysTheme>
  );
};

export const Story = (props: { children?: React.ReactNode; className?: string }) => {
  return <section className={props.className}>{props.children}</section>;
};
