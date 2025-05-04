import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../Providers/AuthProvider'
import Swal from 'sweetalert2';

const Navbar = () => {
  const {user,signOutUser} = useContext(AuthContext);
  console.log(user);
  const handleLogOut = ()=>{
    signOutUser()
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Log Out Successfully",
      showConfirmButton: false,
      timer: 1500
    });
  }

    const linkOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/order/salads">Order</Link></li>
        <li><Link to="/secret">Secret</Link></li>
        
        {
          user ? 
          <>
            <button onClick={handleLogOut} className="btn text-white btn-error">Log Out</button>
          </> : 
          <>
            <li><Link to="/login">Login</Link></li>
          </>
        }
    </>


  return (
    <div className="navbar fixed z-10 text-white bg-black/30 max-w-screen-xl mx-auto shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {linkOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        {linkOptions}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
  )
}

export default Navbar