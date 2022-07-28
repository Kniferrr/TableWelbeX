import React from 'react'
import "./Form.css"
import {useSelector, useDispatch} from "react-redux"
import {formInputChange,formIinputCondition,forminputColomn,resetSort,subminForm} from "../../redusers/table"


function Form() {
  const dispatch = useDispatch()
  const argument = useSelector((state) => state.table.argument)
  const sortCondition = useSelector((state) => state.table.sortCondition)
  const sortColomn = useSelector((state) => state.table.sortColomn)

  const inputChange = (e) => {
    e.preventDefault();
    dispatch(formInputChange(e.target.value))
  }

  const IinputCondition = (e) =>{
    e.preventDefault();
    dispatch(formIinputCondition(e.target.value))
  }

  const inputColomn = (e) =>{
    e.preventDefault();
    dispatch(forminputColomn(e.target.value))
  }

  const onSubmit = (e) =>{
    e.preventDefault();
    dispatch(subminForm())
  }

  return (
    <div className='form-group form'>
      <form className='form-group form' onSubmit={onSubmit}>

      <select className='form-control' name="name" onChange={inputColomn} value={sortColomn}>
				<option value="">Поле...</option>
				<option value="name">Название</option>
				<option value="points">Количество</option>
				<option value="distance">Расстояние</option>
			</select>

			<select className='form-control' name="law" onChange={IinputCondition} value={sortCondition}>
				<option value="">Условие...</option>
				<option value="equal">Равно</option>
				<option value="contain">Содержит</option>
				<option value="greater">Больше</option>
				<option value="less">Меньше</option>
			</select>

			<input 
        className='form-control'
				name="argument"
        value={argument}
				onChange={inputChange}
				type="text"
				placeholder="Значение"
				required
			/>

    <button className='btn btn-dark'>
      OK
    </button>
      </form>
      <button className='btn btn-dark resetbutton' 
      onClick={()=> dispatch(resetSort())}
      >Сбросить</button>
    </div>
  )
}

export default Form