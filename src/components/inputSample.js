import React, { useState, useRef } from 'react';

function InputSample(){
    const [inputs, setinputs] = useState({
        name : '',
        nickname : '',
    });
    const nameInput = useRef ();

    const { name , nickname} = inputs;

    const onChange = e => {
        const {value, name } = e.target; 
        setinputs({
            ...inputs,
            [name] : value
        });
    };

    const onReset = () => {
        setinputs({
            name : '',
            nickname : '',
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input name ="name" placeholder = "이름" onChange = {onChange} value ={name} ref={nameInput}/>
            <input name ="nickname" placeholder = "닉네임" onChange = {onChange} value ={nickname} />
            <button onClick={onReset}>초기화</button>
            <div>
                <b>이름 :</b> {name}<br/>
                <b>닉네임 :</b> {nickname} <br/>
            </div>
        </div>
    );
}

export default InputSample;