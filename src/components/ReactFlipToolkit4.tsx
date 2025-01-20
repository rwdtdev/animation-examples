import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router';
import { Flipper, Flipped } from 'react-flip-toolkit';
import anime from 'animejs';
import React from 'react';

const initialItems = new Array(30).fill(0).map(() => nanoid());

export function ReactFlipToolkit4() {
  const [data, setData] = useState(initialItems);
  // const [actionType, setActionType] = useState<ActionTypesKeys>('onDeleteRow');
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

  function delRow(id: string, e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    console.log(e);
    setData(data.filter((item) => item !== id));
    actionType.current = 'onDeleteRow';
  }

  const animateElementIn = (el: HTMLElement, i: number) =>
    anime({
      targets: el,
      opacity: 1,
      delay: i * 10,
      easing: 'easeOutSine',
    });

  const animateElementOut = async (
    el: HTMLElement,
    i: number,
    onComplete: () => void,
  ) => {
    el.style.color = 'red';
    console.log(el.getBoundingClientRect());

    // anime({
    //   targets: el,
    //   opacity: 0,
    //   delay: i * 10,
    //   duration: 2000,
    //   easing: 'easeOutSine',
    //   complete: onComplete,
    // });
    await new Promise((res) => {
      setTimeout(res, 2000);
    });
    onComplete();
  };

  return (
    <>
      <h1 className='mb-1 text-3xl font-bold'>
        Некорректно работает удаление при перемотке
      </h1>
      <Link
        to='https://github.com/aholachek/react-flip-toolkit'
        target='_blank'
        className='underline'
      >
        react-flip-toolkit
      </Link>
      <p>
        Некорректно работает при скролле при удалении элемента - выставляет
        позицию удаляемого элемента как в самой верхней точке скроллинга. ul
        relative не помогает
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
          {data.map((item) => (
            <Flipped
              key={item}
              flipId={item}
              onAppear={animateElementIn}
              onExit={animateElementOut}
              translate={false}
              scale={false}
            >
              <li
                className='mb-1 border border-slate-500'
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
