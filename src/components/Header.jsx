import React from 'react';
import Link from './Link';
import '../styles/header.css';

const Header = () => {
    return ( 
        <div className="ui secondary pointing menu">
            <Link href="/accordion" className="item accordion">
                Accordion
            </Link>
            <Link href="/search" className="item search">
                Search
            </Link>
            <Link href="/color" className="item color">
                Change Color
            </Link>
            <Link href="/translate" className="item translate">
                Translate
            </Link>
        </div>
    );
}
 
export default Header;
