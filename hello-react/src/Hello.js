import React from 'react';

function Hello({color, name, isSpecial}){
    console.log(color, name);
    return <div style={{
        color
    }}>
        {isSpecial ? <b>* </b> : 'not special '}
        안녕하세요. {name}</div>
}

Hello.defaultProps = {
    name: '이름없음'
};

export default Hello;