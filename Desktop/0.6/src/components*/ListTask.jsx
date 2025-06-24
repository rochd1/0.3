import React from 'react';
import { ListGroup, ButtonGroup, Button } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../todoSlice';
import Task from './Task';

const ListTask = () => {
  const tasks = useSelector((state) => state.todos.tasks);
  const filter = useSelector((state) => state.todos.filter);
  const dispatch = useDispatch();

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'done') return task.isDone;
    if (filter === 'notDone') return !task.isDone;
    return true;
  });

  return (
    <div>
      <ButtonGroup className="mb-3">
        <Button
          variant={filter === 'all' ? 'primary' : 'outline-primary'}
          onClick={() => dispatch(setFilter('all'))}
        >
          All
        </Button>
        <Button
          variant={filter === 'done' ? 'success' : 'outline-success'}
          onClick={() => dispatch(setFilter('done'))}
        >
          Done
        </Button>
        <Button
          variant={filter === 'notDone' ? 'danger' : 'outline-danger'}
          onClick={() => dispatch(setFilter('notDone'))}
        >
          Not Done
        </Button>
      </ButtonGroup>

      <ListGroup>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => <Task key={task.id} task={task} />)
        ) : (
          <ListGroup.Item>No tasks found</ListGroup.Item>
        )}
      </ListGroup>
    </div>
  );
};

export default ListTask;