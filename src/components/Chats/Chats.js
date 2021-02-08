import React, { useRef, useEffect } from 'react'
import './Chats.css'

export const Chats = ({messages}) => {
    const chatsRef = useRef();

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const scrollToBottom = () => {
        (chatsRef.current.scrollTop = chatsRef.current.scrollHeight)
    }

    return (
        <div className="Chats" ref={chatsRef}>
            {
                messages.map(msg => (
                    <Chat message={msg} key={msg.number} />
                ))
            }
        </div>
    )
}

const Chat = ({message}) => {
    const {text, is_user_msg} = message;
    return(
        <div className={`Chat ${is_user_msg ? "user-msg" : ""}`}>
            <span>
                {text}
            </span>
        </div>
        
    )
}
