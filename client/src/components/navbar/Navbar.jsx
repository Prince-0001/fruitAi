import React, { useContext } from 'react'
import './navbar.css'
import { AuthContext } from '../../context/AuthContext'


const Navbar = () => {
    const {logout,currentUser}=useContext(AuthContext);
  return (
    <div className='navbar'>
        <p>Welcome, {currentUser.username}</p>
      <button className='button' onClick={logout}>Logout</button>
    </div>
  )
}

export default Navbar
