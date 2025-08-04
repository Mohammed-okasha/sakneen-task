import React from "react";

type ChildrenProp = React.ReactNode;
type BodyProps<T> = {
  data: T[];
  render: (item: T, index: number) => React.ReactNode;
};

interface TableCellProps {
  className?: string;
  children: ChildrenProp;
}

export default function Table({ children }: { children: ChildrenProp }) {
  return (
    <div className="shadow-lg rounded-md overflow-auto bg-white">
      <table className="w-full border-collapse">{children}</table>
    </div>
  );
}

function Header({ children }: { children: ChildrenProp }) {
  return (
    <thead className="border-b border-gray-300 bg-white">{children}</thead>
  );
}

function Body<T>({ data, render }: BodyProps<T>) {
  return <tbody>{data.map(render)}</tbody>;
}

function Row({ className = "", children }: TableCellProps) {
  return <tr className={className}>{children}</tr>;
}

function TableHead({ title }: { title: string }) {
  const thStyle =
    "text-blackText py-5 px-4 text-start md:text-lg font-medium whitespace-nowrap";

  return <th className={thStyle}>{title}</th>;
}

function TableCell({ className, children }: TableCellProps) {
  const baseTdStyle = "py-5 px-4 whitespace-nowrap capitalize tracking-wide";
  const combinedClasses = `${baseTdStyle} ${className}`;

  return <td className={combinedClasses}>{children}</td>;
}

Table.Header = Header;
Table.Body = Body;
Table.Row = Row;
Table.TableHead = TableHead;
Table.TableCell = TableCell;
