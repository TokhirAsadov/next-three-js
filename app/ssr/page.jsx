import styles from './../page.module.css'

export const revalidate = 0;

const fetchTodos = async () => {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos')
    .then(response => response.json());
  return data || [];
}

export default async function SSR() {
  const todos = await fetchTodos() || [];
  return (
    <main className={styles.main}>
      <h1>Server side generated</h1>

      {todos.map(todo => (
        <p key={todo?.id}>{todo?.title}</p>
      ))}
    </main>
  )
}
