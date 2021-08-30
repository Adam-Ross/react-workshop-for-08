import React from 'react'
import SingleTodo from './SingleTodo'
import TodoItem from './TodoItem'

class Todos extends React.Component {
    render() {
        const {todos, deleteTodo, changeStateOfSingleTodo, todo} = this.props

        if(todo) {
            return <SingleTodo todo={todo} />
        }

        return(
            <div>
                {todos.map(todo => (
                    <TodoItem key={todo.id}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    changeStateOfSingleTodo={changeStateOfSingleTodo}
                    />
                ))}
            </div>
        )
    }
}

export default Todos