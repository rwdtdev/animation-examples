import React from 'react';
import { Button } from './ui/button';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Flip);

const items = new Array(20).fill(0).map((item, i) => i + 1);

export function FlipOnClickPage() {
  // const [isDpBlock, setIsDpBlock] = React.useState(true);
  // const isDpBlock = React.useRef(false);

  const refGroup = React.useRef<HTMLUListElement | null>(null);
  const { contextSafe } = useGSAP(() => {}, { scope: refGroup });

  const onBtnClick = contextSafe(() => {
    const state = Flip.getState('.group, .box');
    // setIsDpBlock(!isDpBlock);
    // console.log('isDpBlock.current', isDpBlock.current);
    // isDpBlock.current = !isDpBlock.current;
    // console.log('isDpBlock.current', isDpBlock.current);

    if (refGroup.current?.classList.contains('block')) {
      refGroup.current?.classList.remove('block');
      refGroup.current?.classList.add('flex', 'flex-wrap');
    } else {
      refGroup.current?.classList.remove('flex', 'flex-wrap');
      refGroup.current?.classList.add('block');
    }

    Flip.from(state, {
      absolute: true, // uses position: absolute during the flip to work around flexbox challenges
      duration: 0.3,
      stagger: 0.1,
      ease: 'power1.inOut',
      // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc.
    });
  });

  return (
    <>
      <h1>FlipOnClickPage</h1>
      <Button onClick={onBtnClick}>flex row / col</Button>
      <ul
        ref={refGroup}
        // className={`group ${isDpBlock.current ? 'block' : 'flex flex-wrap'}`}
        className='group overflow-y-scroll'
      >
        {items.map((item) => (
          <li
            key={item}
            className='box m-2 min-w-20 rounded-md bg-gray-200 text-center shadow-md'
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
