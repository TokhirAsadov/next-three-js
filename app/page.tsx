"use client"
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import {useEffect, useState} from "react";

const inter = Inter({ subsets: ['latin'] })

export const revalidate = 60;

const fetchTodos = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json());

    return data || [];
}



export default async function Home() {
  const [message,setMessage] = useState({})

    const fetchMessage = async () => {
        const response = await fetch("/api/todos")
        const message = await response.json();
        setMessage(message);
        console.log(message)
    }


  return (
    <main className={styles.main}>
        <h1 onClick={() => fetchMessage()}>Hello next 13</h1>
    </main>
  )
}
