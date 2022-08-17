import { useState } from 'react';
import {Card, Button} from 'react-bootstrap';


const Task = (props) => {

    return (
        <div className='container'>
            <Card className='mb-3'>
                <Card.Body>
                    <Card.Title>{props.task.name}</Card.Title>
                    <Card.Text>{props.task.description}</Card.Text>
                    <Button className='me-3' variant='success' onClick={() => {props.handleTaskClose(props.id)}}>Close</Button>
                    <Button variant='danger' onClick={() => {props.handleTaskDelete(props.id)}}>Delete</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Task;