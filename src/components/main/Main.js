import React from 'react';
import './Main.css';
import ChatWindow from '../../containers/chat-window/ChatWindow';
import Empty from '../../containers/empty/Empty';

const Main = ({ user, activeUserId }) => {
    return (
        <main className="Main">
            {
                activeUserId !== null
                ? <ChatWindow activeUserId={activeUserId} />
                : <Empty user={user} />
            }

        </main>
    )
}

export default Main;