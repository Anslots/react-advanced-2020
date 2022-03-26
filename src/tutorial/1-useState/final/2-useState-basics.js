import React, { useState } from 'react';
// starts with use
// component must be uppercase
// invoke inside function/component body
// don't call hooks conditonally

const UseStateBasics = () => {
  // console.log(useState());
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);

  const [greeting, setGreeting] = useState('random title');

  const handleClick = () => {
    if (greeting === 'random title'){
      setGreeting('hello matthew');
    } else {
      setGreeting('random title');
    }
    };
  return (
    <React.Fragment>
      <h1>{greeting}</h1>
      <button type='button' className='btn' onClick={handleClick}>
        change title
      </button>
    </React.Fragment>
  );
  };

export default UseStateBasics;
