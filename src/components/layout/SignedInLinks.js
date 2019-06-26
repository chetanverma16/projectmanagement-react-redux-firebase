import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => (
    <div>
    <ul className='right'>
        <li><NavLink to='/create' >New Project</NavLink></li>
            <li><NavLink to='/' onClick={props.signOut}>Log Out</NavLink></li>
        <li><NavLink to='/' className='btn btn-floating white lighten-1 grey-text'>{props.profile.initials}</NavLink></li>
    </ul>
    </div>
)

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null,mapDispatchToProps)(SignedInLinks);