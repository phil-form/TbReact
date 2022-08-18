import {Card, Button} from 'react-bootstrap';


const Task = (props) => {

    const setPriorityColor = () => {
        const priority = props.task.priority;
        let color = 'primary';

        if (priority == 'high') {
            color = 'danger';
        } else if (priority == 'low') {
            color = 'success'
        }

        return color;
    };

    return (
        <div className='container'>
            <Card className='mb-3' style={{opacity: props.task.closed ? 0.5 : 1}}>
                <Card.Header className={'bg-' + setPriorityColor() + ' text-white'}>{props.task.priority} priority</Card.Header>
                <Card.Body>
                    <Card.Title>{props.task.name}</Card.Title>
                    <Card.Text>{props.task.description}</Card.Text>
                    <Button disabled={props.task.closed ? true : false} className='me-3' variant='primary' onClick={() => {props.handleTaskClose(props.id)}}>Close</Button>
                    <Button variant='secondary' onClick={() => {props.handleTaskDelete(props.id)}}>Delete</Button>
                </Card.Body>
                <Card.Footer className={props.task.closed ? 'text-muted' : 'text-warning'}>{props.task.closed ? 'closed' : 'in progress'}</Card.Footer>
            </Card>
        </div>
    );
};

export default Task;