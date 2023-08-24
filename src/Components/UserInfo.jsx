import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';


const UserInfo = ({totalTests}) => {

    const [user] = useAuthState(auth)//firebase hook
    return (
        <div className="user-profile">
            <div className="user">
                <div className="picture">
                    <AccountCircleIcon style={{transform : 'scale(4)'}}/>
                </div>
                <div className="info">
                    <div className="email">
                        {user.email}
                    </div>
                    <div className="joined-at">
                    {user.metadata.creationTime}
                </div>
                </div>
                
            </div>
            <div className="total-tests">
                <span>Total test taken - {totalTests}</span>
            </div>
        </div>
    )
}

export default UserInfo