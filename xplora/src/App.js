import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import Issues from './components/Issues';
import Button from 'react-bootstrap/Button';
import Modal from './components/Modal';

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [modifyData, setModifyData] = useState('');

  const handlemodify = (e, x) => {
    setIsOpen(true);
    setModifyData(x);
  };

  return (
    <div className='App'>
      <Header />
      <Button
        className='newIssue-btn'
        variant='outline-success'
        onClick={() => setIsOpen(true)}
      >
        add a new issue
      </Button>
      <Modal open={isOpen} modifyData={modifyData} />
      <Issues setIsOpen={handlemodify} />
    </div>
  );
}

export default App;
