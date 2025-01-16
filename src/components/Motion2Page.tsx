import { useState } from 'react';
// import './styles.scss';
import { faker } from '@faker-js/faker';
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';
import { Button } from './ui/button';

const name = () => faker.person.firstName();

const initialItems = [...Array(3)].map(name);

export function Motion2Page() {
  const [items, setItems] = useState(initialItems);
  const [isSorted, setIsSorted] = useState(false);
  const handleAdd = () => {
    setItems([name(), ...items]);
  };

  const handleRemove = () => {
    const [, ...rest] = items;
    setItems(rest);
  };

  const handleReset = () => {
    setItems([...initialItems]);
  };

  const handleSort = () => {
    setIsSorted(!isSorted);
  };

  const handleRemoveSelf = (itemName: string) => {
    setItems([...items].filter((name) => name !== itemName));
  };

  const sort = (a: string, b: string) => {
    //if (!isSorted) return 0;
    if (isSorted) return a.localeCompare(b);
  };

  return (
    <>
      <div className='buttons'>
        <Button onClick={handleAdd}>Add</Button>
        <Button onClick={handleRemove}>Remove</Button>
        <Button onClick={handleSort}>Sort</Button>
        <Button onClick={handleReset}>Reset</Button>
      </div>
      <AnimatePresence>
        <motion.ul
          layoutScroll
          style={{ overflow: 'scroll' }}
          className='border border-fuchsia-600'
        >
          {/* {[...items].sort(sort).map((item) => ( */}
          {[...items].map((item) => (
            <Item key={item} onClick={() => handleRemoveSelf(item)}>
              {item}
            </Item>
          ))}
        </motion.ul>
      </AnimatePresence>
    </>
  );
}

type ItemProps = {
  children: React.ReactNode;
  onClick: () => void;
};

function Item({ children, onClick }: ItemProps) {
  const isPresent = useIsPresent();
  const animations = {
    style: {
      position: isPresent ? 'static' : 'absolute',
    },
    initial: { scale: 0, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    exit: { scale: 0, opacity: 0 },
    transition: { type: 'spring', stiffness: 900, damping: 40 },
  };
  return (
    <motion.li {...animations} layout onClick={onClick}>
      {children}
    </motion.li>
  );
}
