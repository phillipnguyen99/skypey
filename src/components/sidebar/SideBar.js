import React from 'react'
import './SideBar.css'
import { User } from '../../containers/users/User'

const SideBar = ({contacts}) => {
    return (
        <div className="Sidebar">
            {
                contacts.map(contact =>
                    <User user={contact} key={contact.user_id} />
                )
            }
        </div>
    )
}

export default SideBar;
