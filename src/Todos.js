import React from 'react'


const Todos = ({Todos,deleteTodo}) => {
    console.log(Todos)
    // const TodosList = Todos.map(todo => {
    //     console.log(todo.item)
    //     return(
    //         <div key={todo.id}>
    //             <label>{todo.item}</label>
    //         </div>
    //     )
    // });
    const TodosList = Todos.length ? (
        Todos.map(todo => {
                console.log(todo.item)
                return(
                    <div className="collection-item" key={todo.id}>
                        <span onClick={()=>{deleteTodo(todo.id)}}>{todo.item}</span>
                    </div>
                )
            })
    ) : (
        <p className="center">You have no Todos Left</p>
    )
    console.log(TodosList)
    return (
        <div className="todos collection">

            {TodosList}
        </div>
    )
}

export default Todos;