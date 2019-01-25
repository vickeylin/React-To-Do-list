import React from 'react'; 
import './App.css';
import TodoItem from "./TodoItem"
import todoData from "./todoData"

class App extends React.Component {
  constructor() {
      super()
      this.state = {
          todos: todoData
      }
  }
  
  render() {
      const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item}/>)
      
      return (
          <div className="todo-list">
              {todoItems}
          </div>
      )    
  }
}

export default App;
