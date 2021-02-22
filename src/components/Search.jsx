import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/search.css';


const Search = () => {

    const [term, setTerm] = useState('');
    const [results, setResults] = useState([]);


    useEffect(() => {
        const search = async ()=> {
           const {data} = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: term
                }
            })
            setResults(data.query.search)
        }

        if (term && !results.length) {
            search();
        }
        else {
            const timeoutId = setTimeout(()=> {
                if (term) {  
                    search();
                }
            }, 500);
    
            return () => {
                clearTimeout(timeoutId);
            }
        }
    }, [term]);


    const renderedResults = results.map((result) => {
        return (
            <div className="item" key={result.pageid} >
                <div className="right floated content">
                    <button className="button">
                        <a 
                            href={`https://en.wikipedia.org?curid=${result.pageid}`}
                            className="text"
                        >
                            Go
                        </a>
                    </button>        
                </div>

                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        );
    });

    return (
        <div className="search">
            <div className="ui form">
                <div className="field">
                    <label>
                        <h3>Search from Wikipedia</h3>
                    </label>
                    <input 
                        value={term}
                        onChange={e => setTerm(e.target.value)}
                        className="search__input"
                        placeholder="Enter a search term"
                    />
                </div>
                <div className="ui celled list">               
                    {renderedResults}
                </div>
            </div>
        </div>      
    );
}
 
export default Search;