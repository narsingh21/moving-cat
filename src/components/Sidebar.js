import React from 'react';
import Icon from './Icon';

export default function Sidebar({ data, updateMidAreaList }) {
  const onDrag = (e) => {
    // event.preventDefault();
    console.log('drag start');
    e.dataTransfer.setData('text/plain', '');
  };
  // const onDragOver = (event) => {
  //   event.preventDefault();
  // };
  const onDrop = (e, item) => {
    // ev.dataTransfer.setData('text/html', ev.target.outerHTML);
    // ev.dataTransfer.setData(
    //   'text/uri-list',
    //   ev.target.ownerDocument.location.href
    // );
    console.log('drop event');
    if (e.clientX !== 0 && e.clientY !== 0) {
      updateMidAreaList(item, {
        x: e.clientX,
        y: e.clientY,
        // setPosition();
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
      {/* {data?.looksList?.map((el) => el.element)} */}
    </div>
  );
}
