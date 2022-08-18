 import { useState } from 'react';
import Task from './Task';
import TaskForm from './TaskForm';


function TodoList(props) {
    const [todos, setTodos] = useState(props.todos) 
    
    function newTask(todo) {
        setTodos( (v) => {
            todo.id = nextId()
            return [todo, ...v]
        })
    }

    function removeTask(todo) {
        const index = todos.indexOf(todo)
        setTodos( (v) => {
            v.splice(index, 1)
            return [...v]
        })
    }

    function nextId() {
        return todos.reduce( (acc, v) => {
            return Math.max(acc, v.id);
        }, 0) + 1
    }

    return (
        <>
        <h1>Todo's</h1>
        <TaskForm onNew={newTask}/>
        <table className='table'>
            <tbody>
                {
                    todos.map( (todo) => <Task key={`${todo.id}`} todo={todo} onRemove={removeTask}/> )
                }
            </tbody>
        </table>
        </>
    )
}

export default TodoList;