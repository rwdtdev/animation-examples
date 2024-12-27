import { Dispatch, useRef } from 'react';
import { Tab } from './TabsExamplePage';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/Flip';

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(Flip);

type Props = {
  tabs: Readonly<Tab[]>;
  selectedTab: Tab;
  setSelectedTab: Dispatch<Tab>;
};

export function AnimatedTab({ tabs, selectedTab, setSelectedTab }: Props) {
  const container = useRef<HTMLDivElement | null>(null);
  const refOne = useRef<HTMLDivElement | null>(null);
  const refTwo = useRef<HTMLDivElement | null>(null);
  const refThree = useRef<HTMLDivElement | null>(null);
  const refTab = useRef<HTMLDivElement | null>(null);

  const { contextSafe } = useGSAP(() => {
    if (refTab.current) {
      refOne.current?.appendChild(refTab.current);
      setSelectedTab(tabs[0]);
    }
  });

  const onClickOne = contextSafe(() => {
    const state = Flip.getState(refTab.current);
    if (refTab.current) {
      refOne.current?.appendChild(refTab.current);
    }
    Flip.from(state, {}).progress(1).progress(0);
    setSelectedTab(tabs[0]);
  });

  const onClickTwo = contextSafe(() => {
    const state = Flip.getState(refTab.current);
    if (refTab.current) {
      refTwo.current?.appendChild(refTab.current);
    }
    Flip.from(state, {}).progress(1).progress(0);
    setSelectedTab(tabs[1]);
  });
  const onClickThree = contextSafe(() => {
    const state = Flip.getState(refTab.current);
    if (refTab.current) {
      refThree.current?.appendChild(refTab.current);
    }
    Flip.from(state, {}).progress(1).progress(0);
    setSelectedTab(tabs[2]);
  });

  return (
    <div
      id='tabs-container'
      ref={container}
      className='relative mb-2 grid h-10 grid-flow-col justify-stretch rounded-lg bg-slate-100 p-1'
    >
      <div
        ref={refOne}
        className='relative p-1 text-center text-sm font-semibold text-slate-500'
        onClick={() => {
          onClickOne();
        }}
      >
        {tabs[0]}
      </div>
      <div
        ref={refTwo}
        className='relative p-1 text-center text-sm font-semibold text-slate-500'
        onClick={onClickTwo}
      >
        {tabs[1]}
      </div>
      <div
        ref={refThree}
        className='relative p-1 text-center text-sm font-semibold text-slate-500'
        onClick={onClickThree}
      >
        {tabs[2]}
        <div
          ref={refTab}
          className='absolute left-0 top-0 z-10 h-full w-full truncate whitespace-nowrap rounded-sm bg-white p-1 px-2 text-center text-sm font-semibold shadow-sm'
        >
          {selectedTab}
        </div>
      </div>
    </div>
  );
}
