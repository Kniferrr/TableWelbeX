import React, { useMemo, useEffect } from "react";
import "../Table/Table.css";
import { useDispatch } from "react-redux";
import { setnumAllPages, setData } from "../../Store/redusers/table";
import { useSelector } from "react-redux";
import { sortRenderData } from "../App/sort";
import getData from "../../http/servises/getData";

const TableBoudy = () => {
  const dispatch = useDispatch();
  const { sort, page, sortColomn, sortCondition, argument, coutSort, data } =
    useSelector((state) => state.table);

  const { renderDataSort, numAllPagesSort } = useMemo(
    () => sortRenderData(sort, page, sortColomn, sortCondition, argument, data),
    [coutSort, sort, page, data]
  );

  useEffect(() => {
    dispatch(setnumAllPages(numAllPagesSort));
    getData.fetchData().then((data) => {
      dispatch(setData(data));
    });
  }, []);
  useEffect(() => {
    dispatch(setnumAllPages(numAllPagesSort));
  }, [renderDataSort]);

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
