import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/Flip';
import React from 'react';
import { Button } from './ui/button';
import { nanoid } from 'nanoid';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Flip);

const initiallyData = new Array(10)
  .fill(0)
  .map((item, i) => ({ id: String(i), text: 'sometext ' + i }));

export function AddRowPage() {
  console.log('rerender DelRowPage');
  const [data, setData] = React.useState(initiallyData);
  const refGroup = React.useRef<HTMLUListElement | null>(null);
  const itemsRef = React.useRef<HTMLLIElement[]>([]);
  const { contextSafe } = useGSAP(() => {}, { scope: refGroup });

  const addRow = contextSafe(() => {
    setData([{ id: nanoid(), text: nanoid() }].concat(data));
    gsap.from(itemsRef.current, { y: -34, duration: 1 });
  });

  return (
    <>
      <Button className='m-1' onClick={addRow}>
        add row2
      </Button>
      <ul ref={refGroup} className='group overflow-y-scroll'>
        {data.map((row) => (
          <li
            key={row.id}
            className='box overflow-hidden'
            ref={(node) => {
              if (itemsRef.current && node) itemsRef.current.push(node);
              // console.log(row, node, itemsRef.current);
            }}
          >
            <div className='m-1 rounded-sm border bg-gray-200 px-2 shadow-sm'>
              {row.text}
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
