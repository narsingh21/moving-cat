import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MidArea from './components/MidArea';
import PreviewArea from './components/PreviewArea';
import Icon from './components/Icon';

export default function App() {
  const [midAreaList, setMidAreaList] = useState([]);
  const [positions, setPostions] = useState([]);
  const [catPosition, setCatPosition] = useState({ x: 0, y: 0, angle: 0 });

  console.log(catPosition);
  const sideBarData = {
    motionList: [
      {
        id: 1,
        element: (
          <div
            onClick={() => {
              setCatPosition((catPosition) => ({
                ...catPosition,
                x: catPosition.x + 10,
              }));
            }}
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer'
          >
            {'Move 10 steps'}
          </div>
        ),
      },
      {
        id: 2,
        element: (
          <div
            onClick={() => {
              setCatPosition((catPosition) => ({
                ...catPosition,
                angle: catPosition.angle + 15,
              }));
            }}
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer'
          >
            {'Turn '}
            <Icon name='redo' size={15} className='text-white mx-2' />
            {'15 degrees'}
          </div>
        ),
      },
      {
        id: 3,
        element: (
          <div
            onClick={() => {
              setCatPosition((catPosition) => ({
                ...catPosition,
                angle: catPosition.angle - 15,
              }));
            }}
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer'
          >
            {'Turn '}
            <Icon name='undo' size={15} className='text-white mx-2' />
            {'15 degrees'}
          </div>
        ),
      },
      {
        id: 4,
        element: (
          <div className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer'>
            {'set yp to '}
            <input
              type='text'
              // maxLength='2'
              // size='1'
              // className='border-none rounded'
              // value={catPosition.y}
              // onChange={(e) => {
              //   setCatPosition((catPosition) => ({
              //     ...catPosition,
              //     y: catPosition.y + Number(e.target.value),
              //   }));
              // }}
            />
          </div>
        ),
      },
    ],
    looksList: [
      {
        id: 5,
        element: (
          <div className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer'>
            {'say Hello'}
          </div>
        ),
      },
    ],
  };

  const updateMidAreaList = (item, position) => {
    setMidAreaList([...midAreaList, item]);
    setPostions([...positions, position]);
  };

  // const updateCatPosition = () => {
  //   // setCatPosition([])
  // };

  console.log(midAreaList, 'midarea');
  return (
    <div className='bg-blue-100 pt-6 font-sans'>
      <div className='h-screen overflow-hidden flex flex-row  '>
        <div className='flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2'>
          <Sidebar data={sideBarData} updateMidAreaList={updateMidAreaList} />{' '}
          <MidArea data={midAreaList} positions={positions} />
        </div>
        <div className='w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2'>
          <PreviewArea catPosition={catPosition} />
        </div>
      </div>
    </div>
  );
}
