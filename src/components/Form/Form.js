import React from 'react'
import "./Form.css"
import {useSelector, useDispatch} from "react-redux"
import {formInputChange,formIinputCondition,forminputColomn,resetSort,subminForm} from "../../Store/redusers/table"


function Form() {
  const dispatch = useDispatch()
  const {argument, sortCondition, sortColomn} = useSelector((state) => state.table)

  return (
    <div className='form-group form'>
      <form className='form-group form' onSubmit={(e)=> {
        e.preventDefault();
        dispatch(subminForm());
      }}>

      <select className='form-control' name="name" onChange={(e)=> dispatch(forminputColomn(e.target.value))} value={sortColomn}>
				<option value="">Поле...</option>
				<option value="name">Название</option>
				<option value="points">Количество</option>
				<option value="distance">Расстояние</option>
			</select>

			<select className='form-control' name="law" onChange={(e)=> dispatch(formIinputCondition(e.target.value))} value={sortCondition}>
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
				onChange={(e)=> dispatch(formInputChange(e.target.value))}
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

export default React.memo(Form);