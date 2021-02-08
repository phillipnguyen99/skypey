import React from 'react'
import './Header.css'

export const Header = ({ activeUser }) => {
    const { name, status } = activeUser;
    return (
        <div className="Header">
            <h1 className="header-name">{name}</h1>
            <p className="header-status">{status}</p>
        </div>
    )
}

