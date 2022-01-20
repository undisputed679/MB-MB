import React from 'react';
import {Link} from 'react-router-dom';
import { auth } from '../../firebase/Firebase';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './HeaderStyle.scss'
const Header=({currentUser})=>(
    
        <div className='header'>
            <Link className="logo-container" to="/">
                <Logo className='Logo'/>
            </Link>
            <div className='options' >
                <Link className ='option' to='/shop'>
                    SHOP
                </Link>
                <Link className ='option' to='/contact'>
                    CONTACT
                </Link>
                {
                    currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
                    :
                    <Link className='option' to='/signin'>SIGN IN</Link>
                }
            </div>
        </div>
    );


export default Header
