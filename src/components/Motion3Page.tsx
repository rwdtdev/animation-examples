import { useState } from 'react';
// import './styles.scss';
import { faker } from '@faker-js/faker';
import { AnimatePresence, motion, useIsPresent } from 'framer-motion';
import { Button } from './ui/button';

export function Motion3Page() {
  const [isBtnVisible, setIsBtnVisible] = useState(false);
  return (
    <>
      <Button
        className='mb-5'
        onClick={() => {
          setIsBtnVisible(!isBtnVisible);
        }}
      >
        show btn
      </Button>
      {isBtnVisible && (
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileTap={{ scale: 0.9 }}
          className='w-36 rounded-md bg-black py-2'
        >
          <span className='text-white'>sdfgsdf</span>
        </motion.button>
      )}
    </>
  );
}
