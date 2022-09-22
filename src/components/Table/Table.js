import React, {useMemo, useEffect} from 'react';
import "../Table/Table.css";
import {useDispatch } from 'react-redux';
import {setnumAllPages, SetSort} from "../../Store/redusers/table";
import {useSelector} from "react-redux";
import {data} from "../../data/data";
import {sotrHeader,sortForm} from "../App/sotr";



function Table() {
    const dispatch = useDispatch();

  return (
    <div className='table'>
        <table>
        <thead>
        <tr className='table_header'>
  <td>Дата</td>
  <td onClick={()=> {
    dispatch(SetSort("name"))          
  }}>Название</td>
  <td onClick={()=>{
    dispatch(SetSort("points")) 
  }}>Количество</td>
  <td onClick={()=>{
    dispatch(SetSort("distance")) 
  }}>Расстояние</td>
        </tr>
        </thead>
        <tbody>
    <TableBoudy/>
    </tbody>
    </table>
    </div>
  )
}


const TableBoudy = () =>{
  const dispatch = useDispatch()

  const {sort, page, sortColomn, sortCondition, argument,coutSort} = useSelector((state) => state.table);
    let renderData = data;

    renderData = useMemo(() =>  sortForm(sortCondition,renderData,sortColomn,argument), [coutSort]);
    
    renderData = sotrHeader(data,renderData,sort);
      
    const siliseNum = 5 * page;
    const numAllPages =  Math.ceil(renderData.length/5);
  
    renderData =  renderData.slice(siliseNum-5, siliseNum);
    
  useEffect(() => {
    dispatch(setnumAllPages(numAllPages));
  },[renderData]);

let itemKey = 0;
return(
    renderData.map((el)=>{
        return(
            <tr key={itemKey++}>
  <td>{el.date}</td>
  <td>{el.name}</td>
  <td>{el.points}</td>
  <td>{el.distance}</td>
        </tr>
        )
    })
)
}

export default React.memo(Table);