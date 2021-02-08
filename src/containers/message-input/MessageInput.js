import React from 'react'
import store from '../../store/index'
import './MessageInput.css'
import {setTypingValue} from '../../actions/setMessageInput'
import { setSendingMessage } from '../../actions/setSendingMessage'

export const MessageInput = ({ value }) => {
    const state = store.getState();
    function handleInputChange(e) {
        store.dispatch(setTypingValue(e.target.value))
    }
    function handleSubmit(e) {
        e.preventDefault();
        const { typing, activeUserId } = state;
        store.dispatch(setSendingMessage(typing, activeUserId))
    }
    return (
        <form className="MessageForm" onSubmit={handleSubmit}>
            <input 
                className="message-input"
                onChange={handleInputChange}
                value={value}
                placeholder="Write a message..."
            />
        </form>
    )
}
