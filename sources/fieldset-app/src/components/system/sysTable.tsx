import { classNames } from "../../helpers/clsx";
import { typography } from "./sysTokens";

export type SysTableProps = {
  children?: React.ReactNode;
};

export const SysTable = (props: SysTableProps) => {
  return (
    <table
      className={classNames("w-full text-(--fg-subtle)")}
      style={{ ...typography[".txt-compact-small"] }}
    >
      {props.children}
    </table>
  );
};

export type SysTableHeadProps = {
  children?: React.ReactNode;
};

export const SysTableHead = (props: SysTableHeadProps) => {
  return (
    <thead
      className={classNames(
        "border-(--border-base) border-y",
        "[&_tr]:bg-(--bg-subtle) [&_tr]:hover:bg-(--bg-subtle)",
      )}
      style={{
        ...typography[".txt-compact-small-plus"],
      }}
    >
      {props.children}
    </thead>
  );
};

export type SysTableBodyProps = {
  children?: React.ReactNode;
};

export const SysTableBody = (props: SysTableBodyProps) => {
  return <tbody className={classNames("border-(--border-base) border-b")}>{props.children}</tbody>;
};

export type SysTableRowProps = {
  children?: React.ReactNode;
};

export const SysTableRow = (props: SysTableRowProps) => {
  return (
    <tr
      className={classNames(
        "bg-(--bg-base) hover:bg-(--bg-base-hover) border-(--border-base) border-b",
        "[&_td:last-child]:pr-6 [&_th:last-child]:pr-6",
        "[&_td:first-child]:pl-6 [&_th:first-child]:pl-6",
      )}
    >
      {props.children}
    </tr>
  );
};

export type SysTableHeaderCellProps = {
  children?: React.ReactNode;
  isSortable?: boolean;
};

export const SysTableHeaderCell = (props: SysTableHeaderCellProps) => {
  return (
    <th
      className={classNames("h-12 py-0 pl-0 pr-6 text-left last:w-full")}
      style={{
        ...typography[".txt-compact-small-plus"],
      }}
    >
      {props.children}
    </th>
  );
};

export type SysTableCellProps = {
  children?: React.ReactNode;
};

export const SysTableCell = (props: SysTableCellProps) => {
  return (
    <td
      className={classNames("h-12 py-0 pl-0 pr-6")}
      style={{
        ...typography[".txt-compact-small-plus"],
      }}
    >
      {props.children}
    </td>
  );
};
