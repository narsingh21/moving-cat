import React from 'react';
import DragElement from './DragElement';

import '../styles/MidArea.css';
import ElementContainer from './ElementContainer';

export default function MidArea({ midAreaObj, setMidAreaObj }) {
  const onDrag = (e) => {
    e.dataTransfer.setData('text/plain', '');
  };

  const updateMidAreaList = (item) => {
    setMidAreaObj((prev) => prev.filter((el) => el.id !== item.id));
    // setPostions([...positions, position]);
  };

  const onDrop = (e, item) => {
    if (e.clientX !== 0 && e.clientY !== 0) {
      updateMidAreaList(item);
    }
  };

  console.log(midAreaObj);

  return (
    <div className='flex-1 h-full overflow-auto '>
      {/* {data.map((el, index) => (
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
      ))} */}
      {Object.keys(midAreaObj).map((key) => (
        <ElementContainer
          position={{
            x: midAreaObj[key].x,
            y: midAreaObj[key].y,
          }}
          width={midAreaObj[key].width}
          height={midAreaObj[key].height}
          key={key}
        >
          {midAreaObj[key].childList.map((el, index) => {
            return (
              <DragElement position={el.position} key={index}>
                <div
                  draggable
                  onDragStart={(event) => onDrag(event)}
                  onDragEnd={(event) => onDrop(event, element)}
                  key={el.id}
                >
                  {el.element}
                </div>
              </DragElement>
            );
          })}
        </ElementContainer>
      ))}
    </div>
  );
}
