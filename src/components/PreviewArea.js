import React, { useEffect, useRef } from 'react';
import CatSprite from './CatSprite';

export default function PreviewArea({ catPosition }) {
  const { x, y, angle } = catPosition;
  const catRef = useRef(null);
  useEffect(() => {
    catRef.current.style.transform = `translate(${x}px,${y}px)`;
    catRef.current.style.transform = `rotate(${angle}deg)`;
  }, [x, y, angle]);

  return (
    <div ref={catRef} className='flex-none h-32 overflow-y-auto p-2'>
      <CatSprite />
    </div>
  );
}
