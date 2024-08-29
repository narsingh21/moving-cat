import React from 'react';
import DragElement from './DragElement';

export default function MidArea({ data, setMidAreaList }) {
  const onDrag = (e) => {

    e.dataTransfer.setData('text/plain', '');
  };

  const updateMidAreaList = (item) => {
    setMidAreaList((prev) => prev.filter((el) => el.id !== item.id));
    // setPostions([...positions, position]);
  };

  const onDrop = (e, item) => {
  
    if (e.clientX !== 0 && e.clientY !== 0) {
      updateMidAreaList(item);
    }
  };

  return (
    <div className='flex-1 h-full overflow-auto'>
      {data.map((el, index) => (
        <DragElement position={el.position} key={index}>
          <div
            draggable
            onDragStart={(event) => onDrag(event)}
            onDragEnd={(event) => onDrop(event, el)}
            key={el.id}
          >
            {el.element}
          </div>
        </DragElement>
      ))}
    </div>
  );
}
