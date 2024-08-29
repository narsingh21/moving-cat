import React from 'react';
import Icon from './Icon';
import { Input } from '../Input';

export default function Sidebar({ data, updateMidAreaList }) {
  const onDrag = (e) => {
    console.log('drag start');
    e.dataTransfer.setData('text/plain', '');
  };

  const onDrop = (e, item) => {
    console.log('drop event');
    if (e.clientX !== 0 && e.clientY !== 0) {
      updateMidAreaList(item, {
        x: e.clientX,
        y: e.clientY,
      });
    }
  };
  return (
    <div className='w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200'>
      <div className='font-bold'> {'Events'} </div>
      <div className='flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer'>
        {'When '}
        <Icon name='flag' size={15} className='text-green-600 mx-2' />
        {'clicked'}
      </div>
      <div className='flex flex-row flex-wrap bg-yellow-500 text-white px-2 py-1 my-2 text-sm cursor-pointer'>
        {'When this sprite clicked'}
      </div>
      <div className='font-bold'> {'Motion'} </div>

      {data?.motionList?.map((el) => (
        <div
          draggable
          onDragStart={(event) => onDrag(event)}
          onDragEnd={(event) => onDrop(event, el)}
          key={el.id}
        >
          {el.element}
        </div>
      ))}
      <div className='font-bold'> {'Looks'} </div>
      {data?.looksList?.map((el) => (
        <div
          key={el.id}
          draggable
          onDragStart={(event) => onDrag(event)}
          onDragEnd={(event) => onDrop(event, el)}
        >
          {el.element}
        </div>
      ))}
    </div>
  );
}
