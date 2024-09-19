import { useEffect, useRef } from 'react';
import React from 'react';

const DragElement = ({ children, position }) => {
  const elementRef = useRef(null);
  useEffect(() => {}, [position]);
  return <div ref={elementRef}>{children}</div>;
};

export default DragElement;
