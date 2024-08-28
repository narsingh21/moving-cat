import { useEffect, useRef } from 'react';
import React from 'react';

const DragElement = ({ children, position }) => {
  const elementRef = useRef(null);
  useEffect(() => {
    elementRef.current.style.left = `${position.x}px`;
    elementRef.current.style.top = `${position.y}px`;
  }, [position]);
  return <div ref={elementRef}>{children}</div>;
};

export default DragElement;
