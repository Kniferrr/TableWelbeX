import React from 'react'
import {useSelector, useDispatch} from "react-redux"
import "../Paginator/Paginator.css"
import {setNewPage} from "../../redusers/table"

const paginatorPages = (pos, page,numAllPages) =>{
    return page + pos > 0 ?  page + pos <= numAllPages ? page + pos: null : null;
   };


function Paginator(props) {
    const dispatch = useDispatch()
    const {numAllPages} = props;
    const page = useSelector((state) => state.table.page);

  return (
    <div className='paginator'>
    <button className='btn btn-dark btnpaginator' 
    onClick={()=> dispatch(setNewPage(paginatorPages(-2, page, numAllPages)))}>
        {paginatorPages(-2, page, numAllPages)}</button>

    <button className='btn  btn-dark btnpaginator' 
   onClick={()=> dispatch(setNewPage(paginatorPages(-1, page, numAllPages)))}>
        {paginatorPages(-1, page, numAllPages)}</button>

    <button className='btn  btn-dark btnpaginator selected' 
    onClick={()=> dispatch(setNewPage(paginatorPages(0, page, numAllPages)))}>
        {paginatorPages(0, page, numAllPages)}</button>

    <button className='btn  btn-dark btnpaginator' 
    onClick={()=> dispatch(setNewPage(paginatorPages(1, page, numAllPages)))}>
        {paginatorPages(1, page, numAllPages)}</button>

    <button className='btn  btn-dark btnpaginator' 
    onClick={()=> dispatch(setNewPage(paginatorPages(2, page, numAllPages)))}>
        {paginatorPages(2, page, numAllPages)}</button>
        </div>
  )
}


export default React.memo(Paginator)