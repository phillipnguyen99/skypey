import React from 'react'
import './User.css'
import store from '../../store'
import {setActiveUserId} from '../../actions/setActiveUserId'

export const User = ({user}) => {
    const {name, profile_pic, status} = user;
    return (
        <div className="User" onClick={handleUserClick.bind(null, user)}>
            <img src={profile_pic} alt={name} className="user_pic" />
            <div className="user_details">
                <p className="user_details-name">{name}</p>
                <p className="user_details-status">{status}</p>
            </div>
        </div>
    )
    function handleUserClick({user_id}) {
        store.dispatch(setActiveUserId(user_id))
    }
}

