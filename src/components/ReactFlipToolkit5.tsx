import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router';
import { Flipper, Flipped } from 'react-flip-toolkit';
import anime from 'animejs';
import React from 'react';

const initialItems = new Array(30).fill(0).map(() => nanoid());

export function ReactFlipToolkit5() {
  const [data, setData] = useState(initialItems);
  // const [actionType, setActionType] = useState<ActionTypesKeys>('onDeleteRow');
  const [selectedRow, setSelectedRow] = useState('');
  const actionType = React.useRef<ActionTypesKeys>('onDeleteRow');

  function onDeleteRow({
    animateExitingElements,
    animateFlippedElements,
  }: {
    animateExitingElements: () => Promise<void>;
    animateFlippedElements: () => Promise<void> | void;
  }) {
    animateExitingElements().then(animateFlippedElements);
    // animateExitingElements();
    // animateFlippedElements();
  }

  function onAddRow({
    hideEnteringElements,
    animateEnteringElements,
    animateFlippedElements,
  }: {
    hideEnteringElements: () => void;
    animateFlippedElements: () => Promise<void> | void;
    animateEnteringElements: () => void;
  }) {
    {
      hideEnteringElements();
      animateFlippedElements()?.then(animateEnteringElements);
    }
  }

  const actionTypes = {
    onDeleteRow,
    onAddRow,
  };

  type ActionTypesKeys = keyof typeof actionTypes;

  function addRow() {
    setData([nanoid(), ...data]);
    actionType.current = 'onAddRow';
  }

  async function delRow(
    id: string,
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
  ) {
    console.log(e);
    setSelectedRow(id);
    await new Promise((res) => {
      setTimeout(res, 700);
    });
    setData(data.filter((item) => item !== id));
    actionType.current = 'onDeleteRow';
  }

  const animateElementIn = (el: HTMLElement) =>
    anime({
      targets: el,
      opacity: 1,
      easing: 'easeOutSine',
      duration: 1,
    });

  return (
    <>
      <h1 className='mb-1 text-3xl font-bold'>Работает корректно</h1>
      <Link
        to='https://github.com/aholachek/react-flip-toolkit'
        target='_blank'
        className='underline'
      >
        react-flip-toolkit
      </Link>
      <p>
        При удалении строки сначала просто изменяется opacity до 0 и лишь затем
        удаляется строка из state и Flip анимирует измененный список
      </p>
      <p>
        При добавлении новой строки ей изначально присваивается opacity-0, затем
        вступает в действие функция анимации нового элемента
      </p>
      <Button onClick={addRow} className='mb-2'>
        add row
      </Button>
      <Flipper
        flipKey={data.join('')}
        // element='ul'
        className='relative flex flex-grow flex-col overflow-y-scroll border-2 border-fuchsia-600'
        handleEnterUpdateDelete={actionTypes[actionType.current]}
      >
        <ul className='border-2 border-blue-600'>
          {data.map((item, i) => (
            <Flipped
              key={item}
              flipId={item}
              onAppear={animateElementIn}
              // onExit={animateElementOut}
            >
              <li
                className={`mb-1 border border-slate-500 transition-opacity duration-700 ${selectedRow === item || (actionType.current === 'onAddRow' && i === 0) ? 'opacity-0' : 'opacity-100'}`}
                onClick={(e) => delRow(item, e)}
              >
                {item}
              </li>
            </Flipped>
          ))}
        </ul>
      </Flipper>
    </>
  );
}
