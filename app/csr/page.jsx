"use client"
import styles from './../page.module.css'
import {useEffect, useState} from "react";

export default function CSR() {
  const [todos,setTodos] = useState([])

  const fetchTodos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json());
    setTodos(data||[])
  }

  useEffect(()=>{
    fetchTodos();
  },[])

  return (
    <main className={styles.main}>
      <h1>Client side generated</h1>
      {todos.map(todo => (
        <p key={todo?.id}>{todo?.title}</p>
      ))}
    </main>
  )
}
