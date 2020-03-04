/* eslint-disable no-unused-vars */
import React from 'react';
import {Link , NavLink} from 'react-router-dom';
function Header (){
  return(
    <header>
      <nav>
        <ul>
          <li>
            <NavLink to='/history'>History</NavLink>
          </li>
          <li>
            <Link to='/'>Home</Link>
          </li>
        </ul>
      </nav>
      <h1>
        RESTy
      </h1>
    </header>

  );
}
export default Header;