
const TodoList = ({tasks}) => {
    let id = 1;
    const tasksJSX = tasks.map(
        t => <TasksTableRow key={id++} {...t}/>
    );
    
    return  (
        <>
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Description</td>
                    </tr>
                </thead>
                <tbody>
                    {tasksJSX}
                </tbody>
            </table>
        </>
    );
};

const TasksTableRow = ({name, description, priority}) => {
    return (
        <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td hidden>{priority}</td>
        </tr>
    );
};

export default TodoList;