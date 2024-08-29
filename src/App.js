import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MidArea from './components/MidArea';
import PreviewArea from './components/PreviewArea';
import Icon from './components/Icon';
import { Input } from './Input';

export default function App() {
  const [midAreaList, setMidAreaList] = useState([]);

  const [catPosition, setCatPosition] = useState({ x: 100, y: 100, angle: 0 });
  const [tempCord, setTempCord] = useState({ x: 100, y: 100, angle: 0 });
  const [looksData, setLooksData] = useState({
    firstBtnText: 'Hello!',
    secondBtnText: 'Hello!',
    thirdBtnText: 'Hmmm!',
    fourthBtnText: 'Hmmm!',
    firstBtnTime: '2',
    thirdBtnTime: '2',
  });

  const [lookState, setLookState] = useState({ show: false, message: '' });
  const [actionPerformedList, setActionPerformed] = useState([]);

  const updatActionList = (callBack) => {
    setActionPerformed((prev) => [...prev, callBack]);
  };

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
              updatActionList(() =>
                setCatPosition((catPosition) => ({
                  ...catPosition,
                  x: catPosition.x + 10,
                }))
              );
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
              updatActionList(() =>
                setCatPosition((catPosition) => ({
                  ...catPosition,
                  angle: catPosition.angle + 15,
                }))
              );
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
              updatActionList(() =>
                setCatPosition((catPosition) => ({
                  ...catPosition,
                  angle: catPosition.angle - 15,
                }))
              );
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
          <div
            onClick={() => {
              setCatPosition((catPosition) => ({
                ...catPosition,
                y: tempCord.y,
              }));

              updatActionList(() =>
                setCatPosition((catPosition) => ({
                  ...catPosition,
                  y: tempCord.y,
                }))
              );
            }}
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-auto'
          >
            {'set y to '}

            <Input
              onChange={(val) => {
                setTempCord((prev) => ({
                  ...prev,
                  y: Number(val),
                }));
              }}
              defautlValue={tempCord.y.toString()}
            />
          </div>
        ),
      },
    ],
    looksList: [
      {
        id: 5,
        element: (
          <div
            onClick={() => {
              setLookState((lookState) => ({
                ...lookState,
                show: true,
                message: looksData.firstBtnText,
              }));
              setTimeout(() => {
                setLookState((lookState) => ({
                  ...lookState,
                  show: false,
                }));
              }, Number(looksData.firstBtnTime) * 1000);
              updatActionList(() => {
                setLookState((lookState) => ({
                  ...lookState,
                  show: true,
                  message: looksData.firstBtnText,
                }));
                setTimeout(() => {
                  setLookState((lookState) => ({
                    ...lookState,
                    show: false,
                  }));
                }, Number(looksData.firstBtnTime) * 1000);
              });
            }}
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-auto'
          >
            {'say'}
            <Input
              onChange={(val) => {
                setLooksData((prev) => ({ ...prev, firstBtnText: val }));
              }}
              defautlValue={looksData.firstBtnText}
            />
            {'for'}
            <Input
              onChange={(val) => {
                setLooksData((prev) => ({ ...prev, firstBtnTime: val }));
              }}
              defautlValue={looksData.firstBtnTime}
            />
          </div>
        ),
      },
      {
        id: 6,
        element: (
          <div
            onClick={() => {
              setLookState((lookState) => ({
                ...lookState,
                show: true,
                message: looksData.secondBtnText,
              }));
            }}
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-auto'
          >
            {'say'}
            <Input
              onChange={(val) => {
                setLooksData((prev) => ({ ...prev, secondBtnText: val }));
              }}
              defautlValue={looksData.secondBtnText}
            />
          </div>
        ),
      },
      {
        id: 7,
        element: (
          <div
            onClick={() => {
              setLookState((lookState) => ({
                ...lookState,
                show: true,
                message: looksData.thirdBtnText,
              }));
              setTimeout(() => {
                setLookState((lookState) => ({
                  ...lookState,
                  show: false,
                }));
              }, Number(looksData.thirdBtnTime) * 1000);
              updatActionList(() => {
                setLookState((lookState) => ({
                  ...lookState,
                  show: true,
                  message: looksData.thirdBtnText,
                }));
                setTimeout(() => {
                  setLookState((lookState) => ({
                    ...lookState,
                    show: false,
                  }));
                }, Number(looksData.thirdBtnTime) * 1000);
              });
            }}
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-auto'
          >
            {'say'}
            <Input
              onChange={(val) => {
                setLooksData((prev) => ({ ...prev, thirdBtnText: val }));
              }}
              defautlValue={looksData.thirdBtnText}
            />
            {'for'}
            <Input
              onChange={(val) => {
                setLooksData((prev) => ({ ...prev, thirdBtnTime: val }));
              }}
              defautlValue={looksData.thirdBtnTime}
            />
          </div>
        ),
      },
      {
        id: 8,
        element: (
          <div
            onClick={() => {
              setLookState((lookState) => ({
                ...lookState,
                show: true,
                message: looksData.fourthBtnText,
              }));
              updatActionList(
                setLookState((lookState) => ({
                  ...lookState,
                  show: true,
                  message: looksData.fourthBtnText,
                }))
              );
            }}
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 my-2 text-sm cursor-pointer w-auto'
          >
            {'say'}
            <Input
              onChange={(val) => {
                setLooksData((prev) => ({ ...prev, firstBtnText: val }));
              }}
              defautlValue={looksData.fourthBtnText}
            />
          </div>
        ),
      },
    ],
  };

  const updateMidAreaList = (item, position) => {
    setMidAreaList([
      ...midAreaList,
      { ...item, id: midAreaList.length, position },
    ]);
  };

  return (
    <div className='bg-blue-100 pt-6 font-sans'>
      <div className='h-screen overflow-hidden flex flex-row  '>
        <div className='flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2'>
          <Sidebar
            data={sideBarData}
            updateMidAreaList={updateMidAreaList}
            actionPerformedList={actionPerformedList}
          />{' '}
          <MidArea data={midAreaList} setMidAreaList={setMidAreaList} />
        </div>
        <div className='w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2'>
          <PreviewArea
            lookState={lookState}
            setLookState={setLookState}
            catPosition={catPosition}
          />
        </div>
      </div>
    </div>
  );
}
