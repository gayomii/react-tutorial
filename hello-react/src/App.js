import React from 'react';
import Hello from './Hello';
import './App.css';
import Wrapper from './Wrapper';

function App() {
  return (
    <Wrapper>
      <div className='div-box'>Hello React</div>
      <Hello name='react' color='blue' />
      <Hello color='skyblue' />
    </Wrapper>
  );
}

export default App;
