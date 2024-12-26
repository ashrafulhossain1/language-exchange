import React from 'react';

const NavProfile = ({ user, signOutUser, loading }) => {

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
                // console.log('success-Sign-Out')
            })
            .catch(error => {
                // console.log('signOut error', error)
            })
    }


    return (
        <>
            <div className="dropdown dropdown-end m-0 p-0">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full border border-blue-600">
                        <img
                            alt="user profile picture"
                            src={user?.photoURL} />
                    </div>
                </div>
                <ul
                    tabIndex={0}
                    className="menu m-0 menu-sm dropdown-content bg-base-200 w-286 rounded-box z-[1] mt-3 p-2 shadow ">
                    <span className='whitespace-nowrap'>{user?.displayName}</span>
                </ul>
            </div>
            <button onClick={handleSignOut} className='btn btn-xs md:btn-sm rounded-full'>Sign Out</button>
        </>
    );
};

export default NavProfile;