import React from 'react'
import "./Form.css"
import {useSelector, useDispatch} from "react-redux"
import {formInputChange,formIinputCondition,forminputColomn} from "../../redusers/table"


function Form() {
  const dispatch = useDispatch()
  const argument = useSelector((state) => state.table.argument)



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
    
  }

  return (
    <div>
      <form className='form-group form' onSubmit={onSubmit}>

      <select className='form-control' name="name" onChange={inputColomn}>
				<option value="">Поле...</option>
				<option value="name">Название</option>
				<option value="points">Количество</option>
				<option value="distance">Расстояние</option>
			</select>

			<select className='form-control' name="law" onChange={IinputCondition}>
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
    </div>
  )
}

export default Form