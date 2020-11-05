import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { addIssue, getSingleIssue, modifyIssue } from 'xplora-crud-api';

const Modal = ({ open, modifyData }) => {
  const [title, setTitle] = useState('');
  const [name, setName] = useState('');
  const [des, setDes] = useState('');
  const [isDone, setIsDone] = useState('');

  let data = {};
  useEffect(() => {
    if (modifyData) {
      data = getSingleIssue(modifyData);
      setTitle(data.title);
      setName(data.name);
      setDes(data.des);
      setIsDone(false);
    }
  }, [modifyData]);

  if (!open) return null;
  return (
    <div className='form'>
      <Form>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            type='text'
            placeholder='Enter a title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            type='text'
            placeholder='Enter your name'
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Form.Label>description</Form.Label>
          <Form.Control
            value={des}
            as='textarea'
            rows={5}
            onChange={(e) => setDes(e.target.value)}
          />
        </Form.Group>
        {modifyData ? (
          <Button
            variant='primary'
            type='submit'
            onClick={() => modifyIssue(modifyData, title, name, des)}
          >
            save
          </Button>
        ) : (
          <Button
            variant='primary'
            type='submit'
            onClick={() => addIssue(title, name, des)}
          >
            Submit
          </Button>
        )}
      </Form>
    </div>
  );
};

export default Modal;
