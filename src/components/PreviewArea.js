import React, { useEffect, useRef } from 'react';
import CatSprite from './CatSprite';
import Chat from './Chat';

export default function PreviewArea({ catPosition, lookState }) {
  const { x, y, angle } = catPosition;
  const catRef = useRef(null);
  useEffect(() => {
    catRef.current.style.transform = `translate(${x}px,${y}px)`;
    catRef.current.style.transform = `rotate(${angle}deg)`;
  }, [x, y, angle]);

  console.log(lookState, 'lookstate');

  return (
    <div ref={catRef} className='flex-none h-32  relative overflow-visible p-2'>
      <CatSprite />
      {lookState.show && <Chat text={lookState.message} />}
    </div>
  );
}
