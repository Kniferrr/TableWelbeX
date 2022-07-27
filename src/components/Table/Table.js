import React from 'react'
import "../Table/Table.css"
import {useDispatch } from 'react-redux'
import {SetSort} from "../../redusers/table"

function Table(props) {
    const dispatch = useDispatch()
    const {data} = props;
  return (
    <div className='table'>
        <table>
        <thead>
        <tr className='table_header'>
  <td>Дата</td>
  <td onClick={()=> {
    dispatch(SetSort("name"))          
  }}>Имя</td>
  <td onClick={()=>{
    dispatch(SetSort("points")) 
  }}>Количество</td>
  <td onClick={()=>{
    dispatch(SetSort("distance")) 
  }}>Расстояние</td>
        </tr>
        </thead>
        <tbody>
    <TableBoudy data={data}/>
    </tbody>
    </table>
    </div>
  )
}


const TableBoudy = (props) =>{
const {data} = props;
return(
    data.map((el)=>{
        return(
            <tr >
  <td>{el.date}</td>
  <td>{el.name}</td>
  <td>{el.points}</td>
  <td>{el.distance}</td>
        </tr>
        )
    })
)
}

export default Table