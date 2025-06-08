import { classNames } from "../../helpers/clsx";

// https://docs.medusajs.com/ui/components/select
// https://github.com/medusajs/medusa/blob/v2.8.4/packages/design-system/ui/src/components/select/select.tsx
// https://react-spectrum.adobe.com/react-aria/Select.html

export type SysSelectProps = {
  defaultValue?: string;
  children?: React.ReactNode;
};

export const SysSelect = (props: SysSelectProps) => {
  return (
    <select className={classNames()} defaultValue={props.defaultValue}>
      {props.children}
    </select>
  );
};

export type SysSelectItemProps = {
  value: string;
  label: string;
};

export const SysSelectItem = (props: SysSelectItemProps) => {
  return <option value={props.value}>{props.label}</option>;
};
