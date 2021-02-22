import React, { useState, useEffect } from 'react';

const Text = ({ text, selected }) => {

    const [color, setColor] = useState('');

    useEffect(() => {
        const changeColor = () => {
            if (selected.label) {
                setColor(selected.value);
            }
        }
        changeColor(); 
    });

    
    return ( 
        <div style={{ color: `${color}` }}> {text} </div>   
    );
}
 
export default Text;