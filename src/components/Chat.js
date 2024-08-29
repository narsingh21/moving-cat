import React from 'react';
const Chat = ({ text }) => {
  return (
    <div
      style={{ transform: 'translateX(100%)' }}
      className='w-auto top-0 right-0  h-10 bg-gray-400 border-2 absolute after:content-none after:block after:w-0 after:w-0 after:left-3 after:bottom-[-10px] after:border-transparent '
    >
      {text}
    </div>
  );
};

export default Chat;
