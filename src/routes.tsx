import { FlipResizePage } from '@/components/FlipResizePage';
import { HomePage } from '@/components/HomePage';
import { FlipOnClickPage } from '@/components/FlipOnClickPage';
import { AddDelRowPage } from '@/components/AddDelRowPage';
import { DelRowPage } from '@/components/DelRowPage';
import { AddRowPage } from '@/components/AddRowPage';
import { KeyFrameAddRowPage } from '@/components/KeyFrameAddRowPage';
import { GsapDemo } from '@/components/GsapDemo';
import { GsapDemoCustom } from '@/components/GsapDemoCustom';
import { AddDelRow2Page } from '@/components/AddDelRow2Page';
import { AddDelRow3Page } from './components/AddDelRow3Page';
import { AddDelRow4Page } from './components/AddDelRow4Page';
import { Motion1Page } from './components/Motion1Page';
import { Motion2Page } from './components/Motion2Page';
import { ReactTransitionPage } from './components/ReactTransitionPage';
import { ReactTransitionGroup } from './components/ReactTransitionGroup';
import { ReactCSSTransition } from './components/ReactCSSTransition';
import { ReactFlipToolkit } from './components/ReactFlipToolkit';
import { TabsReactFlipTool } from './components/TabsReactFlipTool';
import { TabsGsapFlip } from './components/TabsGsapFlip';
import { ReactFlipToolkit2 } from './components/ReactFlipToolkit2';
import { ReactFlipToolkit3 } from './components/ReactFlipToolkit3';
import { ReactFlipToolkit4 } from './components/ReactFlipToolkit4';
import { ReactFlipToolkit5 } from './components/ReactFlipToolkit5';
import { SpinnerPage } from './components/SpinnerPage';
import { ReactCSSTransition2 } from './components/ReactCSSTransition2';
import { Motion3Page } from './components/Motion3Page';
import { TailwindBtnAnimation } from './components/TailwindBtnAnimation';
import { TailwindListAnimations } from './components/TailwindListAnimations';
import { TailwindListAnimations2 } from './components/TailwindListAnimations2';
import { TailwindListAnimations3 } from './components/TailwindListAnimations3';
import { TailwindListAnimations4 } from './components/TailwindListAnimations4';

export const routes = [
  {
    path: '/',
    name: 'Главная ',
    element: <HomePage />,
    inNav: false,
  },
  {
    path: '/tabs',
    name: 'Tabs gsap Flip example',
    element: <TabsGsapFlip />,
    inNav: true,
  },
  {
    path: '/tabsreactfliptool',
    name: 'Tabs ReactFlipTool !!! ',
    element: <TabsReactFlipTool />,
    inNav: true,
  },
  {
    path: '/flip-resize',
    name: 'on resize gsap Flip',
    element: <FlipResizePage />,
    inNav: true,
  },
  {
    path: '/flip-onclick',
    name: 'on click gsap Flip',
    element: <FlipOnClickPage />,
    inNav: true,
  },
  {
    path: '/delrow',
    name: 'del row gsap',
    element: <DelRowPage />,
    inNav: true,
  },
  {
    path: '/addrow',
    name: 'add row gsap',
    element: <AddRowPage />,
    inNav: true,
  },
  {
    path: '/addrowkeyframe',
    name: 'keyframes add row ',
    element: <KeyFrameAddRowPage />,
    inNav: true,
  },
  {
    path: '/adddelrow',
    name: 'gsap Flip add/del row',
    element: <AddDelRowPage />,
    inNav: true,
  },
  {
    path: '/adddelrow2',
    name: 'gsap Flip add/del row - 2',
    element: <AddDelRow2Page />,
    inNav: true,
  },
  {
    path: '/adddelrow3',
    name: 'gsap Flip add/del row - 3',
    element: <AddDelRow3Page />,
    inNav: true,
  },
  {
    path: '/adddelrow4',
    name: 'gsap Flip add/del row - 4',
    element: <AddDelRow4Page />,
    inNav: true,
  },
  {
    path: '/gsapdemo',
    name: 'gsap demo',
    element: <GsapDemo />,
    inNav: true,
  },
  {
    path: '/gsapdemocustom',
    name: 'gsap demo custom',
    element: <GsapDemoCustom />,
    inNav: true,
  },
  {
    path: '/motionone',
    name: 'motion dnd add/del row',
    element: <Motion1Page />,
    inNav: true,
  },
  {
    path: '/motiontwo',
    name: 'motion add/del row',
    element: <Motion2Page />,
    inNav: true,
  },
  {
    path: '/motionthree',
    name: 'motion-3',
    element: <Motion3Page />,
    inNav: true,
  },

  {
    path: '/reacttransition',
    name: 'react Transition',
    element: <ReactTransitionPage />,
    inNav: true,
  },
  {
    path: '/reacttransitiongroup',
    name: 'react Transition Group',
    element: <ReactTransitionGroup />,
    inNav: true,
  },
  {
    path: '/reactcsstransition',
    name: 'react CSSTransition ',
    element: <ReactCSSTransition />,
    inNav: true,
  },
  {
    path: '/reactcsstransition2',
    name: 'react CSSTransition2 ',
    element: <ReactCSSTransition2 />,
    inNav: true,
  },
  {
    path: '/reactfliptoolkit',
    name: 'ReactFlipToolkit ',
    element: <ReactFlipToolkit />,
    inNav: true,
  },
  {
    path: '/reactfliptoolkit2',
    name: 'ReactFlipToolkit-2 example ',
    element: <ReactFlipToolkit2 />,
    inNav: true,
  },
  {
    path: '/reactfliptoolkit3',
    name: 'ReactFlipToolkit-3 ',
    element: <ReactFlipToolkit3 />,
    inNav: true,
  },
  {
    path: '/reactfliptoolkit4',
    name: 'ReactFlipToolkit-4 ',
    element: <ReactFlipToolkit4 />,
    inNav: true,
  },
  {
    path: '/reactfliptoolkit5',
    name: 'ReactFlipToolkit-5 !!!',
    element: <ReactFlipToolkit5 />,
    inNav: true,
  },
  {
    path: '/spinner',
    name: 'Spinner',
    element: <SpinnerPage />,
    inNav: true,
  },
  {
    path: '/tailwindbtnanimations',
    name: 'Tailwind Btn Animations',
    element: <TailwindBtnAnimation />,
    inNav: true,
  },
  {
    path: '/tTailwindlistanimations',
    name: 'Tailwind List Animations',
    element: <TailwindListAnimations />,
    inNav: true,
  },
  {
    path: '/TailwindListAnimations2',
    name: 'Tailwind List Animations 2',
    element: <TailwindListAnimations2 />,
    inNav: true,
  },
  {
    path: '/TailwindListAnimations3',
    name: 'Tailwind List Animations 3',
    element: <TailwindListAnimations3 />,
    inNav: true,
  },
  {
    path: '/TailwindListAnimations4',
    name: 'Tailwind List Animations 4',
    element: <TailwindListAnimations4 />,
    inNav: true,
  },
] as const;
