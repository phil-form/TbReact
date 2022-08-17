import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Task from './task';


const TaskList = () => {
    const [tasks, setTasks] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [priority, setPriority] = useState('normal');
    const [validated, setValidated] = useState(false);

    const handleTaskClose = (key) => {
        setValidated(false);

        let t = [...tasks];
        t[key].closed = true;

        setTasks(t);
    };

    const handleTaskDelete = (key) => {

        let t = [...tasks];
        t.splice(key, 1);

        setTasks(t);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setValidated(true);

        let newTask = {
            name: name,
            description: description,
            priority: priority,
            closed: false
        };

        let t = [...tasks];
        t.push(newTask);

        console.log(newTask)
        console.log(t)

        setTasks(t);
    };

    return (
        <div className='container'>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group className='mb-3 mt-5'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control 
                        value={name} 
                        type='text' 
                        onChange={(e) => {setName(e.target.value)}}
                        required
                    />
                    <Form.Control.Feedback type='invalid'>Please enter a name for the taskr</Form.Control.Feedback> 
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
                <Button variant='success' type='submit' className='mb-3'>Add task</Button>
            </Form>
            <h1>Tasks</h1>
            {tasks.map(
                (task, key) => (
                    <Task key={key} handleTaskDelete={handleTaskDelete} handleTaskClose={handleTaskClose} id={key} task={task} />
                )
            )}
        </div>
    );
};

export default TaskList;