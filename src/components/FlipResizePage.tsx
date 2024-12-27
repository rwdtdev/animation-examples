import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Flip);

const items = new Array(20).fill(0).map((item, i) => i + 1);

export function FlipResizePage() {
  console.log('FlipResizePage rerender');
  const refGroup = React.useRef<HTMLUListElement | null>(null);
  const { contextSafe } = useGSAP(() => {}, { scope: refGroup });

  const onResize = contextSafe(async () => {
    console.log('Flip');

    const state = Flip.getState('.group, .box');

    Flip.from(state, {
      absolute: true, // uses position: absolute during the flip to work around flexbox challenges
      duration: 0.5,
      // stagger: 0.1,
      ease: 'power1.out',
      // you can use any other tweening properties here too, like onComplete, onUpdate, delay, etc.
    });
  });

  React.useEffect(() => {
    let el = refGroup.current;
    let prevInlineSize = 0;
    const ro = new ResizeObserver((entries) => {
      if (prevInlineSize === entries[0].contentBoxSize[0].inlineSize) return;
      console.log(entries[0].contentBoxSize[0].inlineSize);
      prevInlineSize = entries[0].contentBoxSize[0].inlineSize;
      onResize();
    });

    ro.observe(el!);

    return () => {
      ro.unobserve(el!);
      el = null;
    };
  }, []);

  return (
    <div className='relative'>
      <h1>FlipResizePage</h1>
      <ul
        ref={refGroup}
        // className={`group ${isDpBlock.current ? 'block' : 'flex flex-wrap'}`}
        className={`group flex flex-wrap`}
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
    </div>
  );
}
