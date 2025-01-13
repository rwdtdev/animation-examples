import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/Flip';
import { useRef, useState } from 'react';
import { nanoid } from 'nanoid';
import { Button } from './ui/button';

gsap.registerPlugin(Flip);

type Item = {
  id: string;
  text: string;
};

type Data = {
  items: Item[];
  state: Flip.FlipState | null;
  addingRow: boolean;
  deletingRow: string;
};

const initialItems = new Array(10)
  .fill(0)
  .map((item, i) => ({ id: nanoid(), text: 'sometext ' + i, action: '' }));

export function AddDelRow3Page() {
  console.log('1.rerender AddDelRowPage');
  const containerRef = useRef<HTMLUListElement | null>(null);
  const q = gsap.utils.selector(containerRef);

  const [data, setData] = useState<Data>({
    items: initialItems,
    state: null,
    addingRow: false,
    deletingRow: '',
  });

  useGSAP(
    () => {
      console.log('useGSAP');

      if (data.deletingRow) {
        console.log('if (data.deletingRow) {}');
        gsap.to(q(`#box-${data.deletingRow}`), {
          x: q(`#box-${data.deletingRow}`)[0].offsetWidth,
          onComplete: () => {
            console.log('onComplete removing row');
            setData({
              state: Flip.getState(q('.box')),
              items: data.items.filter((item) => item.id !== data.deletingRow),
              addingRow: false,
              deletingRow: '',
            });
          },
        });
      }

      if (!data.state) return;
      Flip.from(data.state, {
        absolute: true,
        ease: 'power1.inOut',
        targets: q('.box'),
        scale: true,
        simple: true,
        onStart: () => console.log('Flip'),
        onEnter: (elements) => {
          console.log('onEnter');
          return gsap.fromTo(
            elements,
            {
              y: -50,
              // opacity: 1,
              // scale: 0,
            },
            {
              y: 0,
              // opacity: 1,
              // scale: 1,
              delay: 0.2,
              duration: 0.3,
            },
          );
        },

        onComplete() {
          // works around a Safari rendering bug (unrelated to GSAP). Things reflow narrower otherwise.
          const boxes = document.querySelector('.boxes');
          const lastChild = boxes?.lastChild;
          boxes?.appendChild(lastChild!);
        },
      });
    },
    {
      dependencies: [data, q],
    },
  );

  function delRow(id: string) {
    console.log('func delRow');
    setData({
      state: null,
      items: data.items,
      addingRow: false,
      deletingRow: id,
    });
  }

  function addRow() {
    setData({
      state: Flip.getState(q('.box')),
      items: [{ id: nanoid(), text: 'sometext' + nanoid() }, ...data.items],
      addingRow: true,
      deletingRow: '',
    });
  }

  return (
    <>
      <p className='mb-3 whitespace-pre-wrap px-2'>{`Более сложный вариант.
В случае удаления сначала анимируется удаляемая строка без изменения useState.
Замем удаляется item в useState и сохраняется Flip.state.
Затем при ререндере выполняется Flip обновленного useState.
В случае добавления строки просто добавляется item в useState, туда же сохраняется Flip.state. Затем при ререндере выполняется Flip обновленного useState. 
ul надо обернуть еще в один div dp relative чтобы новые items появлялись не сверху дисплея а из верхней части элемента`}</p>

      <Button onClick={addRow} className='z-10 mb-2'>
        add row
      </Button>
      <div className='relative'>
        <ul ref={containerRef} className='boxes flex flex-col overflow-hidden'>
          {data.items.map((row) => {
            console.log('render list map');
            return (
              <li
                id={`box-${row.id}`}
                key={row.id}
                className={`box my-2 rounded-sm border bg-gray-200 px-2`}
                onClick={() => {
                  delRow(row.id);
                }}
              >
                {row.text}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
