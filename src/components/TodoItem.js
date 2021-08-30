import React from 'react'

class TodoItem extends React.Component {
    render() {
        const {todo, deleteTodo, changeStateOfSingleTodo} = this.props

        const handleDeleteTodo = (e) => {
            deleteTodo(parseInt(e.target.id))
        }

        const handleChangeState = (todo) => {   
            changeStateOfSingleTodo(todo)
        }
        


        return(
            <div className="todoItem">
                <h1 onClick={() => handleChangeState({todo})}>{todo.todoBody}</h1>
                <p>{todo.id}</p>
                <button className="btn" id={todo.id} onClick={handleDeleteTodo}>Delete</button>
            </div>
        )
    }
}

export default TodoItem