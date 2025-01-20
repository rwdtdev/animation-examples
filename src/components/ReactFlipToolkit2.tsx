import { useState } from 'react';
import { Flipper, Flipped } from 'react-flip-toolkit';
import anime from 'animejs';

type Props = {
  hideEnteringElements: () => void;
  animateEnteringElements: () => void;
  animateExitingElements: () => Promise<void>;
  animateFlippedElements: () => void;
};
function getRandomList() {
  return [...new Array(100).keys()].filter(() => Math.random() > 0.5);
}
// one of the three callbacks below is passed to the
// handleEnterUpdateDelete prop of the Flipper component

// all animations happen at the same time
const simultaneousAnimations = ({
  hideEnteringElements,
  animateEnteringElements,
  animateExitingElements,
  animateFlippedElements,
}: Props) => {
  hideEnteringElements();
  animateExitingElements();
  animateFlippedElements();
  animateEnteringElements();
};

// wait for exiting elements to be removed
// next, animate updating elements
// finally, after updates are complete,
// animate entering elements
const exitThenFlipThenEnter = ({
  hideEnteringElements,
  animateEnteringElements,
  animateExitingElements,
  animateFlippedElements,
}: Props) => {
  hideEnteringElements();
  animateExitingElements()
    .then(animateFlippedElements)
    .then(animateEnteringElements);
};

// animate exiting and updating elements simultaneously
// then, when both are complete, animate in new elements
const exitAndFlipThenEnter = ({
  hideEnteringElements,
  animateEnteringElements,
  animateExitingElements,
  animateFlippedElements,
}: Props) => {
  hideEnteringElements();
  Promise.all([animateExitingElements(), animateFlippedElements()]).then(
    animateEnteringElements,
  );
};

const transitions = {
  simultaneousAnimations,
  exitThenFlipThenEnter,
  exitAndFlipThenEnter,
};

type TransitionKeys = keyof typeof transitions;

const animateElementIn = (el: HTMLElement, i: number) =>
  anime({
    targets: el,
    opacity: 1,
    delay: i * 10,
    easing: 'easeOutSine',
  });

const animateElementOut = (
  el: HTMLElement,
  i: number,
  onComplete: () => void,
) => {
  el.style.color = 'red';
  anime({
    targets: el,
    opacity: 0,
    delay: i * 10,
    easing: 'easeOutSine',
    complete: onComplete,
  });
};

export function ReactFlipToolkit2() {
  const [state, setState] = useState<{
    list: number[];
    transitionType: TransitionKeys;
  }>({
    list: getRandomList(),
    transitionType: 'exitThenFlipThenEnter',
  });
  // const updateList = () => {
  //   setState({ ...state, list: getRandomList() });
  // };

  return (
    <div className='p-4'>
      <div>
        <h1>Пример с сайта библиотеки</h1>
        <h2 className='text-lg font-bold'>
          Enter/update/delete animation order
        </h2>
        {Object.keys(transitions).map((transition) => {
          return (
            <label className='m-1 inline-block' key={transition}>
              <input
                type='radio'
                name='transition'
                className='mr-1'
                value={transition}
                checked={transition === state.transitionType}
                onChange={(ev) =>
                  setState({
                    transitionType: ev.currentTarget.value as TransitionKeys,
                    list: getRandomList(),
                  })
                }
              />
              {transition}
            </label>
          );
        })}
      </div>
      <Flipper
        flipKey={state.list.join('')}
        element='ul'
        className='flex w-full flex-wrap'
        handleEnterUpdateDelete={transitions[state.transitionType]}
      >
        {state.list.map((d) => (
          <Flipped
            key={d}
            flipId={d.toString()}
            onAppear={animateElementIn}
            onExit={animateElementOut}
          >
            <li key={d} className='inline-block w-16 text-center text-lg'>
              {d}
            </li>
          </Flipped>
        ))}
      </Flipper>
    </div>
  );
}
