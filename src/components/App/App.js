import './App.css';
import React, {useMemo} from 'react';
import Form from '../Form/Form';
import Table from '../Table/Table';
import {data} from "../../data/data"
import {useSelector} from "react-redux"
import Paginator from '../Paginator/Paginator';
import {sotrHeader,sortForm} from "./sotr"

function App()  {
  const sort = useSelector((state) => state.table.sort)
  const page = useSelector((state) => state.table.page)
  const Colomn = useSelector((state) => state.table.sortColomn)
  const Condition = useSelector((state) => state.table.sortCondition)
  const argument = useSelector((state) => state.table.argument)
  const sortState = useSelector((state) => state.table.sortState)
  const coutSort = useSelector((state) => state.table.coutSort)
  let renderData = data;


  renderData = sotrHeader(data,renderData,sort);

   if(sortState){
    renderData = sortForm(Condition,renderData,Colomn,argument);
      }

  const siliseNum = 5 * page;
  //useMemo для того что бы таблица не менялась пока не нажать OK или Сбросить
  const numAllPages = useMemo(() => Math.ceil(renderData.length/5),[ coutSort, page,sort]);
  renderData = useMemo(() =>  renderData.slice(siliseNum-5, siliseNum), [, coutSort,page,sort]);

  return (
    <div className="App">
      <Form/>
      <Table data={renderData}/>
      <Paginator numAllPages={numAllPages}/>
    </div>
  );
}
export default React.memo(App);
