import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addTask } from '../todoSlice';

const AddTask = () => {
  const [taskDescription, setTaskDescription] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskDescription.trim()) {
      dispatch(addTask(taskDescription));
      setTaskDescription('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup className="mb-3">
        <Form.Control
          type="text"
          placeholder="Add a new task"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <Button variant="primary" type="submit">
          Add Task
        </Button>
      </InputGroup>
    </Form>
  );
};

export default AddTask;