import React from 'react';
import NavigationBar from '../navbar';
import ProfileDetails from './ProfileDetails';
import Header from './Header';

const ProfilePage = () => {
  return (
    <>
        <NavigationBar />
        <Header />
        <div style={{height: '100vh'}}>
            <ProfileDetails />
        </div>
    </>
  )
}

export default ProfilePage;