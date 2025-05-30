import { useState } from 'react';
import Welcome from './components/welcome';
import Hello from './components/hello';
import './App.css';
import TodoList from './components/todoList/TodoList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='card'>
        <div> 1. Two components in one container</div>
        <Hello/>
        <Welcome/>
      </div>
      <div>
      <div className='card'> 2. Todo list</div>
        <TodoList/>
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
