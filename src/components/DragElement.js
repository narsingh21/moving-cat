import { useEffect, useRef } from 'react';
import React from 'react';

const DragElement = ({ children, position }) => {
  const elementRef = useRef(null);

  return <div ref={elementRef}>{children}</div>;
};

export default DragElement;
