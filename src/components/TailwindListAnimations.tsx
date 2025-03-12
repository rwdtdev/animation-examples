import { li } from 'motion/react-client';
import { nanoid } from 'nanoid';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';

export function TailwindListAnimations() {
  const [list, setList] = useState(
    new Array(10).fill(null).map(() => nanoid()),
  );
  return (
    <>
      <h1 className='mb-3'>Tailwind List Animations</h1>
      <p className='mb-3'>
        в tailwind.config.js надо добавить
        {`theme: {
        ...
        extend: {
            ...
            transitionProperty: {
                'width': 'width'
            },
        },
    },`}
      </p>
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
        'overflow-hidden border transition-[height] duration-300',
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

function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
