import React from 'react';
import logo from '../assets/logo.svg'
import { Counter } from '../components/counter/Counter';
import './Counter.css';

function PageCounter() {
  return (
    <div className="Counter">
      <header className="Counter-header">
        <img src={logo} className="Counter-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/Counter.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="Counter-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="Counter-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="Counter-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="Counter-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </div>
  );
}

export default PageCounter;
