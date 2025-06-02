import { classNames } from "../../helpers/clsx";
import { SysButton } from "./sysButton";
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

export type SysTablePagerProps = {
  itemCount: number;
  itemCountPerPage: number;
  pageIndex: number;
  pageCount: number;
  isPreviousPageDisabled?: boolean;
  isNextPageDisabled?: boolean;
};

export const SysTablePager = (props: SysTablePagerProps) => {
  const startIndex = props.pageIndex * props.itemCountPerPage;
  const endIndex = Math.min((props.pageIndex + 1) * props.itemCountPerPage, props.itemCount) - 1;

  return (
    <div
      className={classNames("text-(--fg-subtle) px-3 py-4")}
      style={{
        ...typography[".txt-compact-small-plus"],
      }}
    >
      <div className="flex items-center justify-between gap-x-2">
        <p className="px-3 py-[5px]">
          <span>{props.itemCount === 0 ? 0 : startIndex + 1}</span>
          <span> &ndash; </span>
          <span>{props.itemCount === 0 ? 0 : endIndex + 1}</span>
          {" of "}
          <span>{props.itemCount}</span>
          {" results"}
        </p>
        <div className="inline-flex items-center gap-x-2">
          <p className="px-3 py-[5px]">
            <span>{props.pageIndex + 1}</span>
            {" of "}
            <span>{props.pageCount}</span>
            {" pages"}
          </p>
          <SysButton variant="ghost" isDisabled={props.isPreviousPageDisabled}>
            Prev
          </SysButton>
          <SysButton variant="ghost" isDisabled={props.isNextPageDisabled}>
            Next
          </SysButton>
        </div>
      </div>
    </div>
  );
};
