import React,{useState} from 'react'
import styles from './style.module.css'

export default function TodoInputs(props) {
    const [inputValue,setInputValue] = useState('')


    const inputChangeHandler = (event)=>{
        setInputValue(event.target.value)
        
    }

    const addBtnHandler = ()=>{
        props.addTotoHandler(inputValue)
        setInputValue('')
        
    }

    const selectChangeHandler = event => {
        props.handleRenderSituation(event.target.value)
        
    } 


  return (
    <div className={styles.todoInputsContainer}>
        <button onClick={addBtnHandler} className={styles.todoaddbtn}>+</button>
        <input onChange={inputChangeHandler} value={inputValue} className={styles.todoInput} type="text"/>
        <select onChange={selectChangeHandler} className={styles.todoSelect} name="box" id="0">
            <option value="all">All</option>
            <option value="uncomplete">UnComplete</option>
            <option value="completed">Completed</option>
        </select>
    </div>
  )
}
