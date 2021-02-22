import React, { useEffect, useState, useRef } from 'react';
import '../styles/dropdown.css';

const Dropdown = ({ options, selected, onSelectedChange, label }) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {

        const onBodyClick = (event)=>{
            if(ref.current && ref.current.contains(event.target)) {
                return;
            }
            setOpen(false);    
        };

        document.body.addEventListener('click', onBodyClick );

        return ()=> {
            document.body.removeEventListener('click', onBodyClick);
        }
    }, []);

    const renderedOptions = options.map(option => {

        const handleClick = () => {
            onSelectedChange(option);
        }

        if (option.value === selected.value) {
            return null
        }
        return (
            <div 
                className="item" 
                key={option.value} 
                onClick={handleClick} 
            >
                {option.label}
            </div>
        );   
    });


    return ( 
        <div ref={ref} className="ui form">
            <div className="field">
                <label className="label">
                    <h3>{label}</h3> 
                </label>
                <div 
                    onClick={()=> setOpen(!open)} 
                    className={`ui selection dropdown ${open ? 'visible active' : ''} options`}
                >
                    <i className="dropdown icon"></i>
                    <div className="textContent">
                        {selected.label} 
                    </div>
                    <div className={`menu ${open ? 'visible transition' : ''} `}>
                        {renderedOptions}
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default Dropdown;