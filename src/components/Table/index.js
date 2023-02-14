import React from "react";
import "./styles.css";

const Table = ({ data, columns, withTotal = true }) => (
  <>
    <table>
      <thead>
        <tr>
          {columns.map((item, index) => (
            <TableHeadItem item={item} />
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <TableRow item={item} columns={columns} key={index} />
        ))}
      </tbody>
    </table>
    {withTotal && (
      <div className="tableTotalRight">{`Total  ${data.length}`}</div>
    )}
  </>
);

const TableHeadItem = ({ item }) => <th>{item.heading}</th>;

const TableRow = ({ item, columns }) => (
  <tr>
    {columns.map((columnItem, index) => {
      return <td key={index}>{columnItem.value(item)}</td>;
    })}
  </tr>
);

export default Table;
