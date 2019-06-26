import React from 'react';
import {Link} from 'react-router-dom';

import SignInLinks from './SignedInLinks';
import SignOutLinks from './SignedOutLinks';
import {connect} from 'react-redux';

const Navbar = (props)=>{
    const {auth,profile} = props

    const links = auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks />;
    return(
    <div className='navigation'>
        <nav className='nav-wrapper black'>
            <div className='container'>
                <Link className='brand-logo' to='/'>Home</Link>
                {links}

            </div>
        </nav>
    </div>
)
}
const mapStateToProps = (state) =>{
    return{
        auth:state.firebase.auth,
        profile:state.firebase.profile
}

} 

export default connect(mapStateToProps)(Navbar);