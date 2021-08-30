import React from 'react'
import Todos from './components/Todos'

import './App.css';

class App extends React.Component {
  state = {
    todos: [
      {
        todoBody: 'Wash the car',
        make: 'Ford', 
        year: '1999',
        id: 1
      },
      {
        todoBody: 'Wash the car',
        make: 'Form', 
        year: '1989',
        id: 2
      },
      {
        todoBody: 'Wash the car',
        make: 'Ford', 
        year: '2001',
        id: 3
      },
      {
        todoBody: 'Wash the car',
        make: 'Ford', 
        year: '2016',
        id: 4
      }
    ],
    todo: null
  }



  render() {
    const {todos, todo} = this.state

    const deleteTodo = async (id) => {
      // // make the api request with the id that's pasted in

      // // const res = awiat axios.get('')
      // this.setState({todos: [...res.data]})


      // Filter UI data
      // // this.setState({todos: todos.filter(elem=>  id != elem.id)})
    }

    const changeStateOfSingleTodo = (todo) => {
      this.setState({todo: todo})
      console.log(todo)
    }


    return (
      <div className="container">
          <Todos todo={todo} changeStateOfSingleTodo={changeStateOfSingleTodo} todos={todos} deleteTodo={deleteTodo}/>   
      </div>
    )
  }

}

export default App;
