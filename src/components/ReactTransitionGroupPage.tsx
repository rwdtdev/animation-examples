import { useState, createRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './ReactTransitionGroupPage.css';
import { nanoid } from 'nanoid';
import { Button } from './ui/button';

export function ReactTransitionGroupPage() {
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
    <div style={{ marginTop: '2rem' }}>
      <Button
        onClick={() => {
          setItems((items) => [
            ...items,
            {
              id: nanoid(),
              text: nanoid(),
              nodeRef: createRef(),
            },
          ]);
        }}
      >
        Add Item
      </Button>
      <ul style={{ marginBottom: '1rem' }}>
        <TransitionGroup className='todo-list'>
          {items.map(({ id, text, nodeRef }) => (
            <CSSTransition
              key={id}
              nodeRef={nodeRef}
              timeout={500}
              classNames='item'
            >
              <li ref={nodeRef}>
                <Button
                  className='remove-btn'
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
      </ul>
    </div>
  );
}
