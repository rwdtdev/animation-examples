import { useState, createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ReactTransitionGroup.css';
import { nanoid } from 'nanoid';
import { Button } from './ui/button';

export function ReactTransitionGroup() {
  const [items, setItems] = useState(() => [
    {
      id: nanoid(),
      text: 'Buy eggs',
      nodeRef: createRef<HTMLLIElement>(),
    },
    {
      id: nanoid(),
      text: 'Pay bills',
      nodeRef: createRef<HTMLLIElement>(),
    },
    {
      id: nanoid(),
      text: 'Invite friends over',
      nodeRef: createRef<HTMLLIElement>(),
    },
    {
      id: nanoid(),
      text: 'Fix the TV',
      nodeRef: createRef<HTMLLIElement>(),
    },
  ]);
  return (
    <div className='flex h-full flex-col overflow-y-auto'>
      <Button
        onClick={() => {
          setItems((items) => [
            {
              id: nanoid(),
              text: nanoid(),
              nodeRef: createRef(),
            },
            ...items,
          ]);
        }}
      >
        Add Item
      </Button>
      {/* <ul className='flex h-full flex-col overflow-y-auto border'> */}
      <TransitionGroup
        component={'ul'}
        className='todo-list flex h-full flex-col overflow-y-auto border'
      >
        {items.map(({ id, text, nodeRef }) => (
          <CSSTransition
            key={id}
            nodeRef={nodeRef}
            timeout={1000}
            classNames='item-c9R8l'
          >
            <li ref={nodeRef} className='overflow-hidden'>
              <Button
                className='mr-2'
                size='sm'
                onClick={() =>
                  setItems((items) => items.filter((item) => item.id !== id))
                }
              >
                &times;
              </Button>
              {text}
            </li>
          </CSSTransition>
        ))}
      </TransitionGroup>
      {/* </ul> */}
    </div>
  );
}
