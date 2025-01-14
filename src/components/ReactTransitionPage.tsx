import { Transition } from 'react-transition-group';
import { useRef, useState } from 'react';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
};

const transitionStyles = {
  entering: { opacity: 1, color: 'blue' },
  entered: { opacity: 1, color: 'red' },
  exiting: { opacity: 0, color: 'green' },
  exited: { opacity: 0 },
  unmounted: {},
};

export function ReactTransitionPage() {
  const [inProp, setInProp] = useState(false);

  const nodeRef = useRef(null);
  return (
    <div>
      <Transition nodeRef={nodeRef} in={inProp} timeout={500}>
        {(state) => {
          console.log(state);
          return (
            <div
              ref={nodeRef}
              style={{
                ...defaultStyle,
                ...transitionStyles[state],
              }}
            >
              I'm a fade Transition!
            </div>
          );
        }}
      </Transition>
      <button onClick={() => setInProp(!inProp)}>Click to Enter</button>
    </div>
  );
}
