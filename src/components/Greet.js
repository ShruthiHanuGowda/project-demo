import React, { useState } from 'react';
import { data } from './data';

const Greet = () => {
  const [num, setNum] = useState(0);
  return (
    <>
      <section>
        <h2>Regular Counter</h2>
        <h1>{num}</h1>
        <button onClick={() => setNum(num + 1)}>Increase</button>
        <button onClick={() => setNum(num - 1)}>Decrease</button>
        <button onClick={() => setNum(0)}>Reset</button>
      </section>
    </>
  );
};

export default Greet;
