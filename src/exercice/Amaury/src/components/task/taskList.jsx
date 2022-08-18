import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Form from 'react-bootstrap/Form';
import Task from './task';


const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [filteredTasks, setFilteredTasks] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('normal');
    const [validated, setValidated] = useState(false);

    const handleTaskClose = (key) => {
        setValidated(false);

        let t = [...tasks];
        t[key].closed = true;

        setTasks(t);
        setFilteredTasks(t);
    };

    const handleTaskDelete = (key) => {

        let t = [...tasks];
        t.splice(key, 1);

        setTasks(t);
        setFilteredTasks(t);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setValidated(true);

        if (e.target.checkValidity() == false) {
            return;
        };

        let newTask = {
            name: name,
            description: description,
            priority: priority,
            closed: false
        };

        let t = [...tasks];
        t.push(newTask);

        setTasks(t);
        setFilteredTasks(t);
    };

    const filterTasks = (filter) => {
        let t = [];
        if (filter == 'priority') {
            tasks.forEach(task => {
                if (task.priority == 'high' && !task.closed) {
                    t.push(task);
                };
            });     
        } else if (filter == 'progress') {
            tasks.forEach(task => {
                if (!task.closed) {
                    t.push(task);
                };
            });
        } else {
            tasks.forEach(task => {
                if (task.closed) {
                    t.push(task);
                };
            });
        };

        setFilteredTasks(t);
    };

    return (
        <div className='container'>
            <h1>Add a new task</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className='mb-3 mt-5'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        value={name} 
                        type='text' 
                        onChange={(e) => {setName(e.target.value)}}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Please enter a name for the task</Form.Control.Feedback> 
                </Form.Group> 
                
                <Form.Group className='mb-3'>
                    <Form.Label>Description</Form.Label>
                    <Form.Control 
                        value={description} 
                        as='textarea'
                        rows={3}
                        onChange={(e) => {setDescription(e.target.value)}}
                    />
                </Form.Group>
                <Form.Group className='mb-3'>
                    <Form.Label>Priority</Form.Label>
                    <Form.Select required value={priority} onChange={(e) => {setPriority(e.target.value)}}>
                        <option value='normal'>normal</option>
                        <option value='high'>high</option>
                        <option value='low'>low</option>
                    </Form.Select>
                </Form.Group>
                <Button variant='primary' type='submit' className='mb-3'>Add task</Button>
            </Form>
            <h1>Tasks</h1>
            <ButtonGroup className='mb-5'>
                <Button onClick={() => {filterTasks('priority')}} variant='link'>High priority</Button>
                <Button onClick={() => {filterTasks('progress')}} variant='link'>In progress</Button>
                <Button onClick={() => {filterTasks('closed')}} variant='link'>Closed</Button>
            </ButtonGroup>
            {filteredTasks.map(
                (task, key) => (
                    <Task key={key} handleTaskDelete={handleTaskDelete} handleTaskClose={handleTaskClose} id={key} task={task} />
                )
            )}
        </div>
    );
};

export default TaskList;