import React, { useMemo, useEffect } from "react";
import "../Table/Table.css";
import { useDispatch } from "react-redux";
import { setnumAllPages, setData, ERROR } from "../../Store/redusers/table";
import { useSelector } from "react-redux";
import { sortRenderData } from "../App/sort";
import getData from "../../http/servises/getData";

const TableBoudy = () => {
  const dispatch = useDispatch();
  const {
    sort,
    page,
    sortColomn,
    sortCondition,
    argument,
    coutSort,
    data,
    error,
  } = useSelector((state) => state.table);
  let itemKey = 0;
  const { renderDataSort, numAllPagesSort } = useMemo(
    () => sortRenderData(sort, page, sortColomn, sortCondition, argument, data),
    [coutSort, sort, page, data]
  );

  useEffect(() => {
    getData
      .fetchData()
      .then((data) => {
        dispatch(setData(data));
      })
      .catch(() => {
        dispatch(ERROR());
      });
  }, []);

  useEffect(() => {
    dispatch(setnumAllPages(numAllPagesSort));
  }, [renderDataSort]);

  if (error) {
    setTimeout(() => {
      window.location.reload();
    }, "3000");
  }
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
