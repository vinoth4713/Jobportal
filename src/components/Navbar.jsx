import React from 'react'
import { assets } from '../assets/assets'
import { useClerk, UserButton, useUser } from '@clerk/clerk-react'
import { Link } from 'react-router-dom'

const Navbar = () => {



    const {openSignIn} = useClerk()
    const {user} = useUser()




  return (
    <div className='shadow py-4 bg-gradient-to-r from-violet-900 to-purple-950 shadow-md'>
      <div className='container px-4 2x1:px-20 mx-auto flex justify-between items-center text-white'>
        <img className='w-40 h-30 invert' src={assets.logo} />
        {
            user
            ?<div className='flex items-center gap-3'>
                <Link to={'/applications'}>Applied Jobs</Link>
                <p>|</p>
                <p>Hi,{user.firstName+" "+user.lastName}</p>
                <UserButton />
            </div>
            :        <div className='flex gap-4 max-sm:text-xs'>
            <button className='text-white'>Recruiter Login</button>
            <button onClick={ e => openSignIn()} className='bg-blue-600 text-white px-6 sm:px-9 py-2 rounded-full'>Login</button>
        </div>
        }

      </div>
    </div>
  )
}

export default Navbar
