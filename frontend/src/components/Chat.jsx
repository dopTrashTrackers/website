import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaComments, FaTimes } from 'react-icons/fa';

function Chat() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [chatInput, setChatInput] = useState('');

    const handleSend = async (trimmedInput) => {
        const response = await fetch('http://localhost:5000/chat', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ message: trimmedInput }),
        });
        if (response.status !== 200) {
            console.error('Failed to send message');
            return;
        }
        const data = await response.json();
        console.log(data);
        setMessages([...messages, trimmedInput, data.reply]);
    };
    return <>
        <motion.div
            className='fixed bottom-4 right-4'
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
        >
            <button
                className='chat p-4 bg-blue-400 hover:FaTimesbg-blue-500 text-white rounded-full shadow-lg focus:outline-none'
                onClick={() => setIsOpen(!isOpen)}
            >
            <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ type: 'spring', stiffness: 300 }}
            >
                {isOpen ? <FaTimes size={24} /> : <FaComments size={24} />}
            </motion.div>
            </button>
        </motion.div>
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className='fixed bottom-16 right-4 w-96 h-[450px] border border-blue-400 bg-blue-gray-50 
                    rounded-lg shadow-lg shadow-blue-gray-200 overflow-hidden z-10 will-change-auto'
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 100 }}
                    transition={{
                        opacity: { type: 'tween', ease: 'linear', duration: 0.2 },
                        x: { type: 'spring', stiffness: 300 },
                    }}
                >
                    <div className='flex flex-col h-full'>
                        <div className='flex flex-col flex-1 p-4 overflow-y-auto scrollbar-hidden' id='chat-window'>
                            {messages.map((message, index) => (
                                <motion.div 
                                    key={index} 
                                    className={`mb-2 p-2 w-4/5 rounded-lg shadow relative ${index % 2 === 0 ? 'bg-blue-100 self-end' : 'bg-white self-start'}`}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        opacity: { type: 'tween', ease: 'linear', duration: 0.2 },
                                        y: { type: 'spring', stiffness: 300 },
                                    }}
                                >
                                    <span className={`z-10 absolute top-1/2 transform -translate-y-1/2 ${index % 2 === 0 ? 'left-full -ml-[1px] border-l-[12px] border-l-blue-100' : 'right-full -mr-[1px] border-r-[12px] border-r-white'}`} style={{ borderTop: '8px solid transparent', borderBottom: '8px solid transparent' }}></span>
                                    <span dangerouslySetInnerHTML={{ __html: message }}></span>
                                </motion.div>
                            ))}
                        </div>
                        <div className='flex p-2 border-t'>
                            <input
                                type='text'
                                className='flex-1 p-2 border rounded-lg outline-none focus:border-blue-100 text-blue-gray-700'
                                placeholder='Type your query...'
                                id='chat-input'
                                onChange={(e) => setChatInput(e.target.value)}
                                value={chatInput}
                            />
                            <button className='ml-2 p-2 hover:bg-blue-500 bg-blue-400 text-white rounded-lg' id='send-button'
                            onClick={()=>{
                                const trimmedInput = chatInput.trim();
                                if(trimmedInput === '') return;
                                setMessages([...messages, trimmedInput]);
                                setChatInput('');
                                handleSend(trimmedInput);
                            }}
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    </>
}

export default Chat
