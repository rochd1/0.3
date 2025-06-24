import React, { useState } from 'react';
import { Button, Form, ListGroup } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { toggleTask, editTask } from '../todoSlice';

const Task = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(task.description);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (isEditing && editedDescription.trim()) {
      dispatch(editTask({ id: task.id, description: editedDescription }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <ListGroup.Item className="d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <Form.Check
          type="checkbox"
          checked={task.isDone}
          onChange={() => dispatch(toggleTask(task.id))}
          className="me-3"
        />
        {isEditing ? (
          <Form.Control
            type="text"
            value={editedDescription}
            onChange={(e) => setEditedDescription(e.target.value)}
          />
        ) : (
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
        )}
      </div>
      <Button variant={isEditing ? 'success' : 'warning'} onClick={handleEdit}>
        {isEditing ? 'Save' : 'Edit'}
      </Button>
    </ListGroup.Item>
  );
};

export default Task;