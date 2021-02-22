import React, { useState } from 'react';
import '../styles/input.css';


const Input = ({ getData }) => {

    const [text, setText] = useState('');

    const handleChange = (e) => {
        setText(e.target.value);
        getData(e.target.value);
    }

    return ( 
        <div>
            <div className="ui form">
                <div className="field">
                    <label>
                        <h3>Enter text</h3>                     
                    </label>
                    <input 
                      className="input"
                      value={text} 
                      onChange={handleChange} 
                    />
                </div>
            </div>    
        </div>
    );
}
 
export default Input;