import React from 'react';
import './Empty.css';

const Empty = ({user}) => {
    const { name, profile_pic, status } = user;
    const firstName = name.split(" ")[0];
    return (
        <div className="Empty">
            <h1 className="empty-name">Welcome, {firstName}</h1>
            <img className="empty-pic" src={profile_pic} alt={name} />
            <p className="empty-status">
                <b>Status: </b> {status}
            </p>
            <button className="empty-btn">
                Start a conversation
            </button>
            <p className="empty-info">
                Search for someone to start chatting
            </p>
        </div>
    )
}

export default Empty
