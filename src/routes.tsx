import { TabsExamplePage } from '@/components/TabsExamplePage.tsx';
import { FlipResizePage } from '@/components/FlipResizePage';
import HomePage from '@/components/HomePage';
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
import { ReactTransitionGroupPage } from './components/ReactTransitionGroupPage';
import { ReactCSSTransition } from './components/ReactCSSTransition';

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
    element: <TabsExamplePage />,
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
    name: 'add / del row',
    element: <AddDelRowPage />,
    inNav: true,
  },
  {
    path: '/adddelrow2',
    name: 'add / del row2',
    element: <AddDelRow2Page />,
    inNav: true,
  },
  {
    path: '/adddelrow3',
    name: 'add / del row3',
    element: <AddDelRow3Page />,
    inNav: true,
  },
  {
    path: '/adddelrow4',
    name: 'add / del row4',
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
    path: '/reacttransition',
    name: 'react Transition',
    element: <ReactTransitionPage />,
    inNav: true,
  },
  {
    path: '/reacttransitiongroup',
    name: 'react Transition Group',
    element: <ReactTransitionGroupPage />,
    inNav: true,
  },
  {
    path: '/reactcsstransition',
    name: 'react CSSTransition ',
    element: <ReactCSSTransition />,
    inNav: true,
  },
] as const;
