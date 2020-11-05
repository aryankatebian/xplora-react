import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { removeIssue } from 'xplora-crud-api';
import { modifyIssue } from 'xplora-crud-api';

const SingleIssue = ({ issue, setIsOpen, setIssue }) => {
  const { title, name, des, id, isDone } = issue[0];

  return (
    <div
      className='issue-container'
      style={{
        backgroundColor: `${isDone ? '#e1f5e1' : 'rgba(194, 194, 194, 0.1)'}`,
      }}
    >
      <h4 className='issue-title'>{title}</h4>
      <h6 className='issue-name'>name: {name}</h6>
      <p className='issue-des'>{des}</p>
      <div className='btns'>
        <Button
          variant='outline-danger'
          className='close-btn'
          onClick={() => setIssue(removeIssue(id))}
        >
          X
        </Button>
        <Button
          variant='outline-info'
          className='modify-btn'
          onClick={() => setIsOpen(true, id)}
        >
          modify
        </Button>
        <Button
          variant='outline-success'
          className='done-btn'
          onClick={() =>
            setIssue(
              modifyIssue(
                id,
                title,
                name,
                des,
                (issue[0].isDone = !issue[0].isDone)
              )
            )
          }
        >
          {`${!isDone ? 'Done' : 'Activate'}`}
        </Button>
      </div>
    </div>
  );
};

export default SingleIssue;
