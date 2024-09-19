import React, { useEffect, useRef } from 'react';

function ElementContainer({ children, position, width, height }) {
  const elementRef = useRef(null);
  console.log(width, height);
  useEffect(() => {
    elementRef.current.style.left = `${position.x}px`;
    elementRef.current.style.top = `${position.y}px`;
    elementRef.current.style.width = `${width}px`;
    elementRef.current.style.height = `${height}px`;
  }, [position]);
  return (
    <div className='bg-red-600 p-2 absolute' ref={elementRef}>
      {children}
    </div>
  );
}

export default ElementContainer;
