import { useState } from 'react';
import { Button } from './ui/button';
import { twJoin, twMerge } from 'tailwind-merge';

export function TailwindBtnAnimation() {
  const [isBtnVisible, setIsBtnVisible] = useState(false);
  return (
    <>
      <h1>Tailwind Btn Animation</h1>
      <p>use only tailwind classes 'scale' and 'transition-transform'</p>
      <div>
        <Button
          className='mr-5'
          onClick={() => {
            setIsBtnVisible(!isBtnVisible);
          }}
        >
          <span className=''>show btn</span>
        </Button>
        <Button
          className={twJoin(
            'scale-0 transition-transform',
            isBtnVisible && 'scale-100',
          )}
        >
          Some text
        </Button>
      </div>
    </>
  );
}
