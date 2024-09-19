import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import MidArea from './components/MidArea';
import PreviewArea from './components/PreviewArea';
import Icon from './components/Icon';
import { Input } from './Input';

export default function App() {
  const [midAreaObj, setMidAreaObj] = useState({});
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
        onClick: () => {
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
        },
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
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1  text-sm cursor-pointer'
          >
            {'Move 10 steps'}
          </div>
        ),
      },
      {
        id: 2,
        onClick: () => {
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
        },
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
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1  text-sm cursor-pointer'
          >
            {'Turn '}
            <Icon name='redo' size={15} className='text-white mx-2' />
            {'15 degrees'}
          </div>
        ),
      },
      {
        id: 3,
        onClick: () => {
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
        },
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
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1 text-sm cursor-pointer'
          >
            {'Turn '}
            <Icon name='undo' size={15} className='text-white mx-2' />
            {'15 degrees'}
          </div>
        ),
      },
      {
        id: 4,
        onClick: () => {
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
        },
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
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1  text-sm cursor-pointer w-auto'
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
        onClick: () => {
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
        },
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
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1  text-sm cursor-pointer w-auto'
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
        onClick: () => {
          setLookState((lookState) => ({
            ...lookState,
            show: true,
            message: looksData.secondBtnText,
          }));
        },
        element: (
          <div
            onClick={() => {
              setLookState((lookState) => ({
                ...lookState,
                show: true,
                message: looksData.secondBtnText,
              }));
            }}
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1  text-sm cursor-pointer w-auto'
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
        onClick: () => {
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
        },
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
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1  text-sm cursor-pointer w-auto'
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
        onClick: () => {
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
        },
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
            className='flex flex-row flex-wrap bg-blue-500 text-white px-2 py-1  text-sm cursor-pointer w-auto'
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

  const createRandomKey = () => Math.random().toString().slice(-7);

  const checkForItemParent = (item, position) => {
    const parent =
      Object.keys(midAreaObj).find(
        (key) =>
          midAreaObj[key].x < position.x &&
          midAreaObj[key].x + midAreaObj[key].width > position.x &&
          midAreaObj[key].y < position.y &&
          position.y < midAreaObj[key].y + midAreaObj[key].height
      ) ?? false;
    const parentforLower = Object.keys(midAreaObj).find(
      (key) =>
        midAreaObj[key].y < position.y &&
        position.y < midAreaObj[key].y + midAreaObj[key].height
    );
    const parentforUpper = Object.keys(midAreaObj).find(
      (key) =>
        midAreaObj[key].y - 40 < position.y &&
        position.y + midAreaObj[key].height < midAreaObj[key].y
    );
    if (parent) {
      return { parent, action: 'push' };
    } else if (parentforLower) {
      return { parnet: parentforLower, action: 'push' };
    } else if (parentforUpper) {
      return { parent: parentforUpper, action: 'pull' };
    }
    return { parent: false, action: 'create' };
  };

  const updateMidAreaList = (item, position, skip) => {
    const { parent, action } = checkForItemParent(item, position);

    let updatedObj = midAreaObj;
    if (parent) {
      switch (action) {
        case 'push':
          updatedObj[parent].childList.push({
            ...item,
            id: createRandomKey(),
            position,
          });
          updatedObj[parent].height = updatedObj[parent].height + 40;
          break;
        case 'pull':
          updatedObj[parent].childList.splice(1, 0, {
            ...item,
            id: createRandomKey(),
            position,
          });
          break;

        default:
      }
    } else {
      if (!skip) {
        const key = createRandomKey();
        updatedObj[key] = {
          childList: [{ ...item, id: createRandomKey(), position }],
          x: position.x,
          y: position.y,
          width: 150,
          height: 40,
        };
      }
    }
    setMidAreaObj((prev) => ({ ...prev, ...updatedObj }));
  };

  return (
    <div className='bg-blue-100 pt-6 font-sans relative'>
      <div className='h-screen overflow-hidden flex flex-row  '>
        <div className='flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2'>
          <Sidebar
            data={sideBarData}
            updateMidAreaList={updateMidAreaList}
            actionPerformedList={actionPerformedList}
          />{' '}
          <MidArea
            midAreaObj={midAreaObj}
            setMidAreaObj={setMidAreaObj}
            updateMidAreaList={updateMidAreaList}
          />
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
