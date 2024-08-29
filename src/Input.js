import { useEffect, useRef, useState } from 'react';
import React from 'react';

export const Input = ({ onChange, defautlValue }) => {
  const [value, setValue] = useState(defautlValue ?? '');
  const inputRef = useRef(null);
  const handleInputChange = (e) => {
    // e.preventDefafult();
    e.preventDefault();
    setValue(e.target.value);
    onChange?.(e.target.value);
  };

  useEffect(() => {
    inputRef.current.style.width = `${value.length * 8 + 16}px`;
  }, [value]);
  return (
    <div  className='flex w-auto'>
      <input
        className='text-gray-700 rounded-lg  flex-1  focus:outline-none  p-0
         '
        type='text'
        ref={inputRef}
        onChange={(e) => handleInputChange(e)}
        value={value}
      />
    </div>
  );
};
