import React, { useMemo, useEffect } from "react";
import "../Table/Table.css";
import { useDispatch } from "react-redux";
import { setnumAllPages } from "../../Store/redusers/table";
import { useSelector } from "react-redux";
import { sortRenderData } from "../App/sort";

const TableBoudy = () => {
  const dispatch = useDispatch();
  const { sort, page, sortColomn, sortCondition, argument, coutSort } =
    useSelector((state) => state.table);

  const { renderDataSort, numAllPagesSort } = useMemo(
    () => sortRenderData(sort, page, sortColomn, sortCondition, argument),
    [coutSort, sort, page]
  );

  useEffect(() => {
    dispatch(setnumAllPages(numAllPagesSort));
  }, [dispatch, numAllPagesSort, renderDataSort]);

  let itemKey = 0;
  return renderDataSort.map((el) => {
    return (
      <tr key={itemKey++}>
        <td>{el.date}</td>
        <td>{el.name}</td>
        <td>{el.points}</td>
        <td>{el.distance}</td>
      </tr>
    );
  });
};

export default React.memo(TableBoudy);
