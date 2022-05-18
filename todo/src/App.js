import { useState } from 'react';
import './App.css';
import Addtodo from './components/AddToDo/Addtodo';
import Header from './components/Header/Header';
import Listtodo from './components/ListToDo/ListTodo';

const initState = [
  {
    id:1,
    title: 'Помыть посуду',
    boolean: false
  },
  {
    id:2,
    title: 'Подмести двор',
    boolean: false
  },
  {
    id:3,
    title: 'Покормить мужа',
    boolean: false
  }
]
  console.log(initState);
function App() {

  const [todo, setTodo] = useState([])
  return (
    <div className="App">
      <Header />
      <Addtodo todo={todo} setTodo={setTodo}/>
      <Listtodo todo={todo} setTodo={setTodo} />
      
    </div>
  );
}

export default App;
