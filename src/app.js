import React from 'react';
import ReactDOM from 'react-dom';
import Greet from './components/Greet';
import './app.scss';

const App = () => {
  return (
    <div className='container'>
      <Greet />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
