import React from 'react';

const Greet = (props) => {
  const { image, author } = props.singleObj;
  const clickHandle = (e) => {
    console.log(e.target.value);
  };

  return (
    <div
      onMouseOver={() => {
        console.log(author);
      }}
    >
      <img src={image} />
      <p>{author}</p>
      <button onClick={clickHandle}>Click Me</button>
    </div>
  );
};

export default Greet;
