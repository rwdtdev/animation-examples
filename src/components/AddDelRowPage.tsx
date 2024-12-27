import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/Flip';
import React, { useCallback, useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { Button } from './ui/button';

// gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Flip);

type Item = {
  id: string;
  text: string;
  status: string;
};

type Data = {
  items: Item[];
  state: Flip.FlipState | undefined;
};

const initialItems = new Array(10)
  .fill(0)
  .map((item, i) => ({ id: nanoid(), text: 'sometext ' + i, status: '' }));

export function AddDelRowPage() {
  console.log('rerender AddDelRowPage');
  const containerRef = useRef<HTMLUListElement | null>(null);
  const q = gsap.utils.selector(containerRef);

  const removeItems = useCallback(
    (exitingItems: Item[]) => {
      if (!exitingItems.length) return;

      setData((prev) => ({
        state: Flip.getState(q('.box')),
        items: prev.items.filter((item) => !exitingItems.includes(item)),
      }));
    },
    [q],
  );

  const [data, setData] = useState<Data>({
    items: initialItems,
    state: undefined,
  });

  useGSAP(
    () => {
      console.log('useGSAP');
      if (!data.state) return;

      const tl = Flip.from(data.state, {
        absolute: true,
        ease: 'power1.inOut',
        targets: q('.box'),
        scale: true,
        simple: true,
        onEnter: (elements) => {
          return gsap.fromTo(
            elements,
            {
              opacity: 0,
              scale: 0,
            },
            {
              opacity: 1,
              scale: 1,
              delay: 0.2,
              duration: 0.3,
            },
          );
        },
        onLeave: (elements) => {
          return gsap.to(elements, {
            opacity: 0,
            scale: 0,
          });
        },
        onComplete() {
          // works around a Safari rendering bug (unrelated to GSAP). Things reflow narrower otherwise.
          const boxes = document.querySelector('.boxes'),
            lastChild = boxes?.lastChild;
          boxes?.appendChild(lastChild!);
        },
      });
      const exiting = data.items.filter((item) => item.status === 'exiting');
      // remove the exiting items from the DOM after the animation is done
      tl.add(() => removeItems(exiting));
    },
    {
      dependencies: [data, q, removeItems],
    },
  );

  function delRow(id: string) {
    console.log('delRow', q, Flip.getState(q('.box')));
    setData({
      state: Flip.getState(q('.box')),
      items: data.items.map((item) =>
        item.id === id ? { ...item, status: 'exiting' } : item,
      ),
    });
  }

  function addRow() {
    setData({
      state: Flip.getState(q('.box')),
      items: [
        { id: nanoid(), text: 'sometext' + nanoid(), status: 'entered' },
        ...data.items,
      ],
    });
  }

  return (
    <>
      <Button onClick={addRow}>add row</Button>
      <ul ref={containerRef} className='boxes flex flex-col overflow-hidden'>
        {data.items.map((row) => (
          <li
            id={`box-${row.id}`}
            key={row.id}
            className={`box my-2 rounded-sm border bg-gray-200 px-2 ${['exiting', 'exited'].includes(row.status) ? 'hidden' : ''} `}
            onClick={() => {
              delRow(row.id);
            }}
          >
            {row.text}
          </li>
        ))}
      </ul>
    </>
  );
}
