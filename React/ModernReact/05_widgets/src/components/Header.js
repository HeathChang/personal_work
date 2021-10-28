import React from 'react';
import Link from './Link';
const Header = () => {
    return (
        <div className="ui secondary point menu">
            <a href="/" className="item">Accordion<Link /></a>
            <a href="/search" className="item">Search<Link /></a>    
            <a href="/dropdown" className="item">Dropdown<Link /></a>    
            <a href="/translate" className="item">Translate<Link /></a>    
    
        </div>
    )
}
export default Header;