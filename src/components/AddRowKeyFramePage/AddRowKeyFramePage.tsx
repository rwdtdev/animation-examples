import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/Flip';
import React from 'react';
import { Button } from '../ui/button';
import { nanoid } from 'nanoid';
// import './animate.css';
import classes from './animate.module.css';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Flip);

const initiallyData = new Array(10)
  .fill(0)
  .map((item, i) => ({ id: String(i), text: 'sometext ' + i }));

export function AddRowKeyFramePage() {
  console.log('rerender DelRowPage');
  const [data, setData] = React.useState(initiallyData);
  const itemsRef = React.useRef<{ id: string; node: HTMLLIElement }[]>([]);

  function addRow() {
    setData([{ id: nanoid(), text: nanoid() }].concat(data));
  }

  return (
    <>
      нужно обновлять key у строки каждый раз чтобы применился @keyframes
      <Button onClick={addRow}>add row</Button>
      <ul className='group overflow-y-scroll'>
        {data.map((row, i) => (
          <li
            key={row.id + String(i)}
            // className='box roll-out overflow-hidden'
            className={`box overflow-hidden ${classes.rollOut}`}
            ref={(node) => {
              if (itemsRef.current && node)
                itemsRef.current.push({ id: row.id, node: node });
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
