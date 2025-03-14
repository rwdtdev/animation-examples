import { nanoid } from 'nanoid';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
import { Button } from './ui/button';
import { delay } from '@/lib/delay';

export function TailwindListAnimations() {
  const [list, setList] = useState(
    new Array(10).fill(null).map(() => nanoid()),
  );
  return (
    <>
      <h1 className='mb-3'>Tailwind List Animations</h1>
      <p>
        для удаления строк в tailwind.config.js надо добавить:
        {`theme: {
        ...
        extend: {
            ...
            transitionProperty: {
                'height': 'height'
            },
        },
    },`}
      </p>
      <p className='mb-3'>in tailwind-4 it isn`t necessary</p>
      <p>для добавления строк в tailwind.config.js : </p>
      <pre>
        {` 
    animation: {
    'addrow-y5PGF': 'height2 1.25s linear ',
    },
    
  keyframes: {
    height2: {
      '0%': { height: '0' },
      '100%': { height: '10' },
    },
  },`}
      </pre>

      <Button
        onClick={() => {
          setList((st) => [nanoid(), ...st]);
        }}
      >
        add item
      </Button>

      <ul>
        {list.map((item) => (
          <ListItem key={item} data={item} setList={setList} />
        ))}
      </ul>
    </>
  );
}

function ListItem({
  data,
  setList,
}: {
  data: string;
  setList: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <li
      className={twJoin(
        'animate-addrow-y5PGF overflow-hidden border transition-[height] duration-300',
        isSelected ? 'h-0 border-none' : 'h-10',
      )}
      onClick={async () => {
        setIsSelected((st) => !st);
        await delay(300);
        setList((st) => st.filter((item) => item !== data));
      }}
    >
      {data}
    </li>
  );
}
