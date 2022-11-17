import React from 'react'
import { selectUser } from '../features/userSlice'
import Nav from '../Nav'
import './ProfileScreen.css'
import { useSelector } from 'react-redux/es/exports'
import { auth } from '../firebase'

function Profile() {
  const user=useSelector(selectUser);
  return (
    <div className='profileScreen'>
      <Nav/>
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img className='profileScreen__avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="Netflix avatar" />
        <div className="profileScreen__details">
          <h2>{user.email}</h2>
          <div className="profileScreen__plans">
            

           <button onClick={()=>auth.signOut()} className='profileScreen__signOut'>Sign Out</button> 
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
