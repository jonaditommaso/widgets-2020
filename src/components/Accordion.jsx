import React, { Fragment, useState } from 'react';
import '../styles/accordion.css';

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {

        const active = index === activeIndex ? 'active' : '';

        return (
            <Fragment key={item.title}>
                <div className="accordion">
                    <div className={`title ${active}`} onClick={() => onTitleClick(index)}>
                        <i className="dropdown" />
                        {item.title}
                    </div>
                    <div className={`content ${active}`}>
                        <p className="textContent">{item.content}</p>
                    </div>
                </div>               
            </Fragment>
        );
    });


    return ( 
        <div className="ui accordion">
            {renderedItems}
        </div>
    );
}
 
export default Accordion;