import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';
import Counter from './Counter';

function App() {
  return (
    <Wrapper>
      <div className='div-box'>Hello React</div>
      <br></br>
      <Hello name='react' color='blue' isSpecial='true' />
      <Hello color='skyblue' />
      <Counter />
    </Wrapper>
  );
}

export default App;
