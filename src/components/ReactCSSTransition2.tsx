import { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import './reactCSSTransition2.css';
import { Button } from './ui/button';

export function ReactCSSTransition2() {
  const [showBtn, setShowBtn] = useState(false);
  const refBtn1 = useRef(null);
  const refBtn2 = useRef(null);
  return (
    <div style={{ paddingTop: '2rem' }}>
      {
        <Button onClick={() => setShowBtn(!showBtn)} size='lg' className='mr-5'>
          {showBtn ? 'Close' : 'Show'} Btn
        </Button>
      }
      <CSSTransition
        in={showBtn}
        nodeRef={refBtn1}
        timeout={300}
        classNames='btn-1'
        unmountOnExit
        onEnter={() => console.log('transition onEnter')}
        onExited={() => console.log('transition onExited')}
        on
      >
        <Button ref={refBtn1} onClick={() => setShowBtn(false)}>
          Close
        </Button>
      </CSSTransition>
    </div>
  );
}
