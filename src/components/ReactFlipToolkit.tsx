import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Button } from './ui/button';
import { Link } from 'react-router';
import { Flipper, Flipped } from 'react-flip-toolkit';

const initialItems = new Array(100).fill(0).map(() => nanoid());

export function ReactFlipToolkit() {
  const [data, setData] = useState(initialItems);

  function addRow() {
    setData([nanoid(), ...data]);
  }

  function delRow(id: string) {
    setData(data.filter((item) => item !== id));
  }

  return (
    <>
      <h1 className='mb-1 text-3xl font-bold'>HomePage</h1>
      <Link
        to='https://github.com/aholachek/react-flip-toolkit'
        target='_blank'
        className='underline'
      >
        react-flip-toolkit
      </Link>
      <Button onClick={addRow} className='mb-2'>
        add row
      </Button>
      <Flipper flipKey={data.join('')} className='overflow-y-scroll'>
        <ul className='outline outline-blue-600'>
          {data.map((item) => (
            <Flipped key={item} flipId={item}>
              <li
                key={item}
                className='mb-1 border border-slate-500'
                onClick={() => delRow(item)}
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
