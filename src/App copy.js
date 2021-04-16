
import { useState } from 'react';
import './App.css';
import Notes from "./Components/Notes";
function App() {
  const [todos, getToDo] = useState([])
  const toggleToDoApp = (i) =>  {
    // ---- remove the lisst ------//
    getToDo(todos.filter((item,index) => i !== index));
    
    // lnline strick code ------//
    // getToDo(todos.map((item, k)=>  k === i ? {
    //     ...item,
    //     complete: !item.complete
    //   } : item
    // ))
  }
  
  return (
    <div className="App">
      <Notes myfromSubmit={(text) => getToDo([{text, complete:false}, ...todos])} />
    <div>
    {todos.map(({text,complete},i)=>(
        <div key={text} onClick={()=> toggleToDoApp(i)} style={{textDecoration: complete ? 'line-through' : ''}}>{text}</div>
      )) }
        
        </div>
    </div>
  );
}

export default App;               
