import { nanoid } from 'nanoid';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
import { Button } from './ui/button';
import { delay } from '@/lib/delay';

export function TailwindListAnimations2() {
  const [list, setList] = useState(
    new Array(10).fill(null).map(() => nanoid()),
  );

  const [animate, setAnimate] = useState(false);
  return (
    <>
      <h1 className='mb-3'>Tailwind List Animations</h1>
      <p>в tailwind.config.js надо добавить</p>
      <pre>
        {`keyframes: {
  moveright: {
    '0%': { left: '0%' },
    '100%': { left: '100%' },
  },
},

animation: {
  'moveright-BPigm': 'moveright 1.25s linear ',
  },`}
      </pre>
      <p className='mb-3'>in tailwind-4 it isn`t necessary</p>

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
        'animate-addrow-y5PGF relative overflow-hidden border duration-300',
        isSelected ? 'h-0 border-none' : 'h-10',
      )}
      onClick={async () => {
        setIsSelected((st) => !st);
        await delay(500);
        setList((st) => st.filter((item) => item !== data));
      }}
    >
      <div
        className={twJoin(
          'absolute',
          isSelected && 'animate-moveright-BPigm duration-500',
        )}
      >
        {data}
      </div>
    </li>
  );
}
