import React, { useState, useEffect } from 'react';
import logo from './logo.svg';

export default () => {
  const [message, setMessage] = useState('');
  const [method, setMethod] = useState('');

  const isLoading = !message;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
};
