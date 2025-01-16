import { nanoid } from 'nanoid';
import { useState } from 'react';
import { Button } from './ui/button';

const initialItems = new Array(100).fill(0).map(() => nanoid());

export function HomePage() {
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
      <p>Примеры анимации в React</p>
      <p>Это шаблон без анимации, для удаления строки - кликните на строку</p>
      <Button onClick={addRow} className='mb-2'>
        add row
      </Button>
      <ul className='overflow-y-scroll outline outline-blue-600'>
        {data.map((item) => (
          <li
            key={item}
            className='mb-1 border border-slate-500'
            onClick={() => delRow(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
