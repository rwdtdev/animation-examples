import React, { useState, useRef } from 'react';

import { CSSTransition } from 'react-transition-group';

import './styles.css';
import { Button } from '../ui/button';
import { Alert, AlertTitle } from '@/components/ui/alert';

export function ReactCSSTransition() {
  const [showButton, setShowButton] = useState(true);
  const [showMessage, setShowMessage] = useState(false);
  const nodeRef = useRef(null);
  return (
    <div style={{ paddingTop: '2rem' }}>
      {showButton && (
        <Button onClick={() => setShowMessage(true)} size='lg'>
          Show Message
        </Button>
      )}
      <CSSTransition
        in={showMessage}
        nodeRef={nodeRef}
        timeout={300}
        classNames='alert'
        unmountOnExit
        onEnter={() => setShowButton(false)}
        onExited={() => setShowButton(true)}
      >
        <Alert ref={nodeRef}>
          <AlertTitle>Animated alert message</AlertTitle>
          <p>This alert message is being transitioned in and out of the DOM.</p>
          <Button onClick={() => setShowMessage(false)}>Close</Button>
        </Alert>
      </CSSTransition>
    </div>
  );
}
