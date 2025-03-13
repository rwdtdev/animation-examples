import { li } from 'motion/react-client';
import { nanoid } from 'nanoid';
import { useRef, useState } from 'react';
import { twJoin } from 'tailwind-merge';
import { Button } from './ui/button';
import { GripVertical } from 'lucide-react';

export function DraggableDiv() {
  const [pos, setPos] = useState({ x: 300, y: 100 });
  const amend = useRef({ x: 0, y: 0 });

  return (
    <>
      {/* <div className='h-96 w-96 border'> */}
      <div
        className={`absolute h-10 w-10 bg-green-300`}
        style={{ left: `${pos.x}px`, top: `${pos.y}px` }}
        draggable
        onMouseDown={(e) => {
          console.log(e, amend.current.x, e.pageX);
          amend.current = {
            x: pos.x - e.pageX,
            y: pos.y - e.pageY,
          };
        }}
        onMouseUp={(e) => {
          // setPos({ x: e.pageX, y: e.pageY });
          // posR.current = { x: e.pageX, y: e.pageY };
        }}
        onDragStart={(e) => {
          // e.preventDefault();
          return false;
        }}
        onDrag={(e) => {
          setPos({
            x: e.pageX + amend.current.x,
            y: e.pageY + amend.current.y,
          });
        }}
        onDragEnd={(e) => {
          setPos({ x: e.pageX, y: e.pageY });
          // posR.current = { x: e.pageX, y: e.pageY };
        }}
      ></div>
      {/* </div> */}
    </>
  );
}
