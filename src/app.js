import React from 'react';
import ReactDOM from 'react-dom';
import { arrayObj } from './components/ArrayObj';
import Greet from "./components/Greet"

const App = () => {
  return (
    <div>
      {arrayObj.map((singleObj) => {
        return <Greet key={singleObj.id} singleObj={singleObj} />;
      })}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
