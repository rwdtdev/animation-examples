import { useState } from 'react';
import { Reorder } from 'motion/react';
import { Button } from './ui/button';
import { nanoid } from 'nanoid';

export function Motion1Page() {
  const [items, setItems] = useState([
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '',
  ]);
  return (
    <>
      <p>Motion dnd add / del row</p>
      <Button
        onClick={() => {
          setItems([nanoid(), ...items]);
        }}
      >
        add item
      </Button>
      <Reorder.Group
        axis='y'
        values={items}
        layoutScroll
        onReorder={setItems}
        style={{ overflowY: 'scroll' }}
      >
        {items.map((item) => (
          <Reorder.Item
            key={item}
            value={item}
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
          >
            <div
              onClick={() => {
                setItems(items.filter((item2) => item2 !== item));
              }}
            >
              {item}
            </div>
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </>
  );
}
