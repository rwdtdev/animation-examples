import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/Flip';
import React from 'react';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Flip);

const initiallyData = new Array(10)
  .fill(0)
  .map((item, i) => ({ id: String(i), text: 'sometext ' + i }));

export function DelRowPage() {
  console.log('rerender DelRowPage');
  const [data, setData] = React.useState(initiallyData);
  // const data = React.useRef(initiallyData);
  const refGroup = React.useRef<HTMLUListElement | null>(null);
  const itemsRef = React.useRef<{ id: string; node: HTMLLIElement }[]>([]);

  const { contextSafe } = useGSAP(() => {}, { scope: refGroup });

  const delRow = contextSafe(async (id: string) => {
    console.log('start delRow()');
    // const state = Flip.getState('.group, .box');

    const row = itemsRef.current.find((row) => row.id === id);
    if (row && refGroup.current) {
      const tl = gsap.timeline();
      tl.to(row.node, {
        x: refGroup.current.getBoundingClientRect().width,
        opacity: 0.5,
      })
        .to(row.node, { height: 0, duration: 0.2 })
        .then(() => setData(data.filter((item) => item.id !== id)));
    }
  });

  return (
    <>
      <span>c Flip в данном случае нет смысла делать </span>
      <ul ref={refGroup} className='group overflow-hidden'>
        {data.map((row) => (
          <li
            key={row.id}
            className={`box overflow-hidden`}
            onClick={() => {
              delRow(row.id);
            }}
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
