import React ,{useState} from 'react'
import styles from './style.module.css'
import TodoInputs from './TodoInputs'
import Todo from './Todo'
export default function TodoList() {

    const [alltodos,setAlltodos] = useState([])
    const [rendering,setRendering] = useState('all')



    const addTotoHandler  = (todoValue) => {
        let newTodoObj = {
            id : Date.now(),
            text : todoValue,
            isDone : false
        }

        setAlltodos(prevTodos => [...prevTodos, newTodoObj])
    }

    const handleRenderSituation = situation =>{
        setRendering(situation)
        
    }

    const removeHandler = id => {
        setAlltodos(
            alltodos.filter(todo=>{
                return todo.id !== id
            })
        )
        
    }

    const changeCompleteSituation = (id) => {
        const updatedTodos = alltodos.map(todo => {
          if (todo.id === id) {
            return {
              ...todo,
              isDone: !todo.isDone
            }
          }
          return todo
        })
      
        setAlltodos(updatedTodos)
      }
      

  return (
    <div className={styles.todoBoxContianer}>
        <TodoInputs addTotoHandler={addTotoHandler} handleRenderSituation={handleRenderSituation}/>
        {alltodos.length > 0 && (
            alltodos.map(todo=>{
                return <Todo key={todo.id} {...todo} removeHandler={removeHandler} changeCompleteSituation={changeCompleteSituation}/>
            })
        )}
    </div>
  )
}
