import React from 'react';
import DragElement from './DragElement';

import ElementContainer from './ElementContainer';
import { flushSync } from 'react-dom';

export default function MidArea({
  midAreaObj,
  setMidAreaObj,
  updateMidAreaList,
}) {
  const onDrag = (e) => {
    e.dataTransfer.setData('text/plain', '');
  };

  const updateMidAreaListLocal = (e, key, el) => {
    const updatedObj = midAreaObj;
    updatedObj[key].childList = updatedObj[key].childList.filter(
      (item) => item.id !== el.id
    );
    updatedObj[key].childList.length === 0 && delete updatedObj[key];

    flushSync(() => setMidAreaObj((prev) => ({ ...prev, ...updatedObj })));
    if (e.clientX !== 0 && e.clientY !== 0) {
      updateMidAreaList(
        el,
        {
          x: e.clientX,
          y: e.clientY,
        },
        'not-create'
      );
    }
  };

  const onDrop = (e, key, el) => {
    if (e.clientX !== 0 && e.clientY !== 0) {
      updateMidAreaListLocal(e, key, el);
    }
  };

  return (
    <div className='flex-1 h-full overflow-auto '>
      {Object.keys(midAreaObj).map((key) => (
        <ElementContainer item={midAreaObj[key]} key={key}>
          {midAreaObj[key].childList.map((el, index) => {
            return (
              <DragElement position={el.position} key={index}>
                <div
                  draggable
                  onDragStart={(event) => onDrag(event)}
                  onDragEnd={(event) => onDrop(event, key, el)}
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
