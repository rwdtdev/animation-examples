import React, { useState, createRef } from 'react';

// import { Container, ListGroup, Button } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { nanoid } from 'nanoid';
import { Button } from '../ui/button';

export function ReactTransitionGroupPage() {
  const [items, setItems] = useState(() => [
    {
      id: nanoid(),
      text: 'Buy eggs',
      nodeRef: createRef<CSSTransition<HTMLLIElement> | undefined>(),
    },
    {
      id: nanoid(),
      text: 'Pay bills',
      nodeRef: createRef<CSSTransition<HTMLLIElement>>(),
    },
    {
      id: nanoid(),
      text: 'Invite friends over',
      nodeRef: createRef<CSSTransition<HTMLLIElement>>(),
    },
    {
      id: nanoid(),
      text: 'Fix the TV',
      nodeRef: createRef<CSSTransition<HTMLLIElement>>(),
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
