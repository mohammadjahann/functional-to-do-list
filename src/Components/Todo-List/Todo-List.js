import React ,{useState} from 'react'
import styles from './style.module.css'
import TodoInputs from './TodoInputs'

export default function TodoList() {

    const [alltodos,setAlltodos] = useState([])



    const addTotoHandler  = (todoValue) => {
        let newTodoObj = {
            id : Date.now(),
            text : todoValue
        }

        setAlltodos(prevTodos => [...prevTodos, newTodoObj])
    }

  return (
    <div className={styles.todoBoxContianer}>
        <TodoInputs addTotoHandler={addTotoHandler}/>
        
    </div>
  )
}
