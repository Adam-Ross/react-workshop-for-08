import React, {Fragment} from 'react'

const SingleTodo = ({todo: {todo}}) => {
    return(
        <Fragment>
            <h1>{todo.make}</h1>
            <h2>{todo.year}</h2>
        </Fragment>
    )
}

export default SingleTodo