import { nanoid } from 'nanoid';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
import { Button } from './ui/button';
import { delay } from '@/lib/delay';

export function TailwindListAnimations4() {
  const [list, setList] = useState(
    new Array(10).fill(null).map(() => nanoid()),
  );

  return (
    <>
      <p>в tailwind.config.js для удаления строки надо добавить</p>
      <pre>
        {`theme: {
        extend: {
          animation: {
            'height-dec-10-0': 'heightDec 1.25s linear ',
            'moveright-BPigm': 'moveright 1.25s linear ',
          },
           heightDec: {
          '0%': { height: '10' },
          '100%': { height: '0' },
        },
          moveright: {
            '0%': { left: '0%' },
            '100%': { left: '100%' },
        },
        },
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

      <div className='flex h-full flex-col overflow-auto'>
        <ul className=''>
          {list.map((item) => (
            <ListItem key={item} data={item} setList={setList} />
          ))}
        </ul>
      </div>
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
        'animate-addrow-y5PGF relative h-10 overflow-hidden border bg-red-600 duration-300',
        isSelected && 'animate-height-dec-10-0 delay-200',
      )}
      onClick={async () => {
        setIsSelected((st) => !st);
        await delay(460);
        setList((st) => st.filter((item) => item !== data));
      }}
    >
      <div
        className={twJoin(
          'absolute flex h-full w-full bg-white',
          isSelected && 'animate-moveright-BPigm',
        )}
      >
        <span className='my-auto'>{data}</span>
      </div>
    </li>
  );
}
