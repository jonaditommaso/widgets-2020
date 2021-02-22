import React, { Fragment, useState } from 'react';
import Dropdown from './Dropdown';
import Text from './Text';
import Input from './Input';
import '../styles/colorChange.css';


const options = [
  {
    label: 'Red',
    value: 'red'
  },
  {
    label: 'Green',
    value: 'green'
  },
  {
    label: 'Blue',
    value: 'blue'
  }
];


const TextColorChange = () => {

    const [selected, setSelected] = useState(options[0]);
    const [text, setText] = useState("");

    const getData = getText => setText(getText);

    const ellipsis = () => {
      if (!text) {
        return <h4>. . .</h4>
      }
      else {
        return (
          <Text 
            selected={selected} 
            text={text} 
          />
        );
      }
    }

    return ( 
      <Fragment>
        <Input getData={getData} />
        <div className="dropdownColor">
          <Dropdown 
            options={options} 
            onSelectedChange={setSelected} 
            selected={selected} 
            label="Select a color" 
          />
        </div>
        <br/>
        <div>   
          {ellipsis()}
        </div>
      </Fragment>
    );
}
 
export default TextColorChange;