import React from 'react'
import styles from './style.module.css'

export default function Todo(props) {

  const removeBtn = () =>{
    props.removeHandler(props.id)
    
  }

  const completeBtn = () => {
    props.changeCompleteSituation(props.id)
    
  }

  return (
    <div className={styles.todo}>
      <h3 className={styles[props.isDone ? 'true' : 'false']}>{props.text}</h3>
      <div>
        <button onClick={removeBtn}>Remove</button>
        <button onClick={completeBtn}>Complete</button>
      </div>
    </div>
  )
}
