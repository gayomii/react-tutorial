import React, { useState } from 'react';

function Counter(){
    const [message, setMessage] = useState('안녕하세요');

    const onClickEnter = () => {
        setMessage('안녕하세요');
    }
    const onClickLeave = () => {
        setMessage('안녕히가세요');
    }
    return (
        <div>
            <h1>{message}</h1>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
        </div>
    );
}

export default Counter;