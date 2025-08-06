import React from 'react'
import styles from './style.module.css'

export default function Todo(props) {
  return (
    <div className={styles.todo}>
      <h3 className={styles[props.isDone ? 'true' : 'false']}>{props.text}</h3>
      <div>
        <button>Remove</button>
        <button>Complete</button>
      </div>
    </div>
  )
}
