import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedOutLinks = () => (
  <div>
    <ul className="right">
      <li>
        <NavLink to="/signup" className="white-text">
          Sign Up
        </NavLink>
      </li>
      <li>
            <NavLink to="/signin" className='white-text'>Log In</NavLink>
      </li>
    </ul>
  </div>
);

export default SignedOutLinks;