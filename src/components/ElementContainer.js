import React, { useEffect, useRef } from 'react';

function ElementContainer({ children, item }) {
  const { x, y, width, height, childList } = item;
  const elementRef = useRef(null);

  function handleSprite() {
    childList.forEach((button) => {
      button.onClick();
    });

    elementRef.current.style.boxShadow = '0px 0px 15px yellow';
    setTimeout(() => (elementRef.current.style.boxShadow = ''), 500);
  }

  useEffect(() => {
    elementRef.current.style.left = `${x}px`;
    elementRef.current.style.top = `${y}px`;
    elementRef.current.style.width = `${width}px`;
    elementRef.current.style.height = `${height}px`;
  }, [x, y, width, height]);
  return (
    <div className=' bg-red absolute' onClick={handleSprite} ref={elementRef}>
      {children}
    </div>
  );
}

export default ElementContainer;
