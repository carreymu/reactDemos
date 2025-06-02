import { useState } from 'react';
import Welcome from './components/welcome';
import Hello from './components/hello';
import AxiosXHR from './components/axiosComponent';
import PubSubDemo from './components/search';
import './App.css';
import TodoList from './components/todoList/TodoList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='app-cards'>
        <div> 1. Two components in one container</div>
        <Hello/>
        <Welcome/>
      </div>
      <div className='app-cards'> 
        <div>2. Todo list</div>
        <TodoList/>
      </div>
      <div className='app-cards'>
        <div>3. Axios demo</div>
        <AxiosXHR/>
      </div>
      <div className='app-cards'>
        <div>4. PubSub demo</div>
        <PubSubDemo/>
      </div>
      <div className="app-cards">
        <button className='btn btn-danger' onClick={() => setCount((count) => count + 1)}>
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
