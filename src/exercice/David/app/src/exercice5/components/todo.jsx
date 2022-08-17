import { useState } from "react";
import TodoForm from "./todo_form";
import TodoList from "./todo_list";

const Todo = (props) => {
    const [tasks, setTasks] = useState([]);

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    return (
        <div className="container">
            <TodoForm onMyEvent={addTask}/>
            <TodoList tasks={tasks}/>
        </div>
    );
};

export default Todo