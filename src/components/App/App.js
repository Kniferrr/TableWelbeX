import './App.css';
import React, {useMemo} from 'react';
import Form from '../Form/Form';
import Table from '../Table/Table';
import {data} from "../../data/data"
import {useSelector} from "react-redux"
import Paginator from '../Paginator/Paginator';

function App()  {
  const sort = useSelector((state) => state.table.sort)
  const page = useSelector((state) => state.table.page)
  const Colomn = useSelector((state) => state.table.sortColomn)
  const Condition = useSelector((state) => state.table.sortCondition)
  const argument = useSelector((state) => state.table.argument)
  const sortState = useSelector((state) => state.table.sortState)
  const coutSort = useSelector((state) => state.table.coutSort)
  let renderData = data;


  //сортировка по клику на хеддер колонки
  switch (sort) {
    case "name": {
      renderData = data.sort((a, b) => a.name > b.name ? 1 : -1);
      break;
    } case "unname": {
      renderData = data.sort((a, b) => a.name > b.name ? 1 : -1);
      renderData = renderData.reverse();
      break;
    }
    case "points":{
      renderData = data.sort((a, b) => a.points > b.points ? 1 : -1);
      break;
    }
    case "unpoints":{
      renderData = data.sort((a, b) => a.points > b.points ? -1 : 1);
      break;
    }
    case "distance":{
      renderData = data.sort((a, b) => a.distance > b.distance ? 1 : -1);
      break;
    }case "undistance":{
      renderData = data.sort((a, b) => a.distance > b.distance ? -1 : 1);
      break;
    }
    default:{
       renderData = data;
       break;
    }
  }


    //сортировка по форме
   if(sortState){
      switch(Condition){
        case "equal":{
          renderData = renderData.filter((el)=> String(el[Colomn]) === argument);
          break;
        }
        case "contain":{
          renderData = renderData.filter((el)=> String(el[Colomn]).includes(String(argument)) === true)
          break;
          }
        case "greater":{
          renderData = renderData.filter((el)=> el[Colomn] > argument);
          break;
        }
        case "less":{
          renderData = renderData.filter((el)=> el[Colomn] < argument);
          break;
        }
        default:{
        break;
        }
      }
      }

  

  


  const siliseNum = 5 * page;
  //useMemo для того что бы таблица не менялась пока не нажать OK или Сбросить
  const numAllPages = useMemo(() => Math.ceil(renderData.length/5),[ coutSort, page]);
  renderData = useMemo(() =>  renderData.slice(siliseNum-5, siliseNum), [, coutSort,page]);

  return (
    <div className="App">
      <Form/>
      <Table data={renderData}/>
      <Paginator numAllPages={numAllPages}/>
    </div>
  );
}

export default React.memo(App);
