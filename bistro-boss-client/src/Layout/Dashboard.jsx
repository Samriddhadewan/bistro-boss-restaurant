import React from 'react'
import { FaAd, FaCalendar, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils, FaVoicemail } from 'react-icons/fa'
import { NavLink, Outlet } from 'react-router-dom'
import useCart from '../Components/Hooks/useCart'

const Dashboard = () => {
    const [cart] = useCart();

    const isAdmnin = true;



  return (
    <div>
        <div className='flex'>
            <div className='w-64 min-h-screen bg-orange-400'>
                <ul className='menu w-full p-4 text-xl'>
                    {
                        isAdmnin? 
                        <>
                        {/* admin options here  */}
                        <li>
                        <NavLink to='/dashboard/adminHome'>
                        <FaHome></FaHome>
                        Admin Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/addUsers'>
                        <FaUtensils></FaUtensils>
                        Add Users
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageItems'>
                        <FaList></FaList>Manage Items
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/manageBookings'>
                        <FaAd></FaAd>
                        Manage Bookings</NavLink>
                    </li>
                    <li>
                        <NavLink to='/dashboard/allUsers'>
                        <FaUsers></FaUsers>
                        All Users</NavLink>
                    </li>
                        </> 
                        :
                        <>
                        {/* normal user options here  */}
                        </>
                    }
                    <div className='divider'> OR</div>
                    <li>
                        <NavLink to='/'>
                        <FaHome></FaHome> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/salad'>
                        <FaSearch></FaSearch> Order</NavLink>
                    </li>
                    <li>
                        <NavLink to='/order/contact'>
                        <FaVoicemail></FaVoicemail> Contact</NavLink>
                    </li>
                </ul>
            </div>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
        </div>
    </div>
  )
}

export default Dashboard