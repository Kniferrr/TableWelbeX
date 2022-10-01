import React from "react";
import "../Table/Table.css";
import { useDispatch } from "react-redux";
import { SetSort } from "../../Store/redusers/table";
import TableBoudy from "../TableBoudy/TableBoudy";

function Table() {
  const dispatch = useDispatch();

  return (
    <div className="table">
      <table>
        <thead>
          <tr className="table_header">
            <td>Дата</td>
            <td
              onClick={() => {
                dispatch(SetSort("name"));
              }}
            >
              Название
            </td>
            <td
              onClick={() => {
                dispatch(SetSort("points"));
              }}
            >
              Количество
            </td>
            <td
              onClick={() => {
                dispatch(SetSort("distance"));
              }}
            >
              Расстояние
            </td>
          </tr>
        </thead>
        <tbody>
          <TableBoudy />
        </tbody>
      </table>
    </div>
  );
}

export default React.memo(Table);
