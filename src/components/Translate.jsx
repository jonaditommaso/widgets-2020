import React, {useState} from 'react';
import Dropdown from './Dropdown';
import Convert from './Convert';
import '../styles/translate.css';


const options = [
    {
        label:'England',
        value: 'en'
    },
    {
        label:'Spanish',
        value: 'es'
    },
    {
        label:'Italian',
        value: 'it'
    },
    {
        label:'French',
        value: 'fr'
    },
    {
        label:'German',
        value: 'de'
    }
];

const Translate = () => {

    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return ( 
        <div>
            <div className="ui form">
                <div className="field">
                    <label>
                        <h3>Enter text</h3>
                    </label>
                    <input 
                        value={text} 
                        onChange={(e)=> setText(e.target.value)} 
                        className="inputTranslate"
                    />
                </div>
            </div>
            <Dropdown 
                options={options}
                selected={language}
                onSelectedChange={setLanguage}
                label="Select a language"
            />
            <hr/>
            <h4 className="ui header">Translation</h4>
            <p className="line">~~~~~~~~~~~~~~~~~~~~</p>
            <Convert text={text} language={language} />
        </div>
    );
}
 
export default Translate;