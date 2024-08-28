import React from 'react';
import DragElement from './DragElement';

export default function MidArea({ data, positions }) {
  return (
    <div className='flex-1 h-full overflow-auto'>
      {data.map((el, index) => (
        <DragElement position={positions[index]} key={index}>
          {el.element}
        </DragElement>
      ))}
    </div>
  );
}
