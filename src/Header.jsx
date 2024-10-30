import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return (
       <div>
         <h1>Welcome To Our Website.</h1>
         <nav>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/service'></Link>
            <Link to='/foods'>Foods</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
       </div>
    );
};

export default Header;