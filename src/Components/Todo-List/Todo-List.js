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

      const render = () => {
        
        if (rendering === 'all'){
            return alltodos.map(todo=>{
                return <Todo key={todo.id} {...todo} removeHandler={removeHandler} changeCompleteSituation={changeCompleteSituation}/>
            })
        } else if (rendering === 'uncomplete') {
            let unCompleted = alltodos.filter(todo => {
                return todo.isDone === false
            })
            return unCompleted.map(todo=>{
                return <Todo key={todo.id} {...todo} removeHandler={removeHandler} changeCompleteSituation={changeCompleteSituation}/>
            })
        } else if (rendering === 'completed'){
            let completed = alltodos.filter(todo=>{
                return todo.isDone 
            })
            return completed.map(todo=>{
                return <Todo key={todo.id} {...todo} removeHandler={removeHandler} changeCompleteSituation={changeCompleteSituation}/>
            })
        }
      }
      

  return (
    <div className={styles.todoBoxContianer}>
        <TodoInputs addTotoHandler={addTotoHandler} handleRenderSituation={handleRenderSituation}/>
        {alltodos.length > 0 && render()}
            
    </div>
  )
}
