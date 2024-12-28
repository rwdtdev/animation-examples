import { TabsExamplePage } from '@/components/TabsExamplePage.tsx';
import { FlipResizePage } from '@/components/FlipResizePage';
import HomePage from '@/components/HomePage';
import { FlipOnClickPage } from '@/components/FlipOnClickPage';
import { AddDelRowPage } from '@/components/AddDelRowPage';
import { DelRowPage } from '@/components/DelRowPage';
import { AddRowPage } from '@/components/AddRowPage';
import { AddRowKeyFramePage } from '@/components/AddRowKeyFramePage/AddRowKeyFramePage';
import { GsapDemo } from '@/components/GsapDemo/GsapDemo';
import { GsapDemoCustom } from '@/components/GsapDemoCustom';
import { AddDelRowPage2 } from '@/components/AddDelRowPage2';
import { AddDelRowPage3 } from './components/AddDelRowPage3';

export const routes = [
  {
    path: '/',
    name: 'Главная ',
    element: <HomePage />,
    inNav: false,
  },
  {
    path: '/tabs',
    name: 'Tabs Flip example',
    element: <TabsExamplePage />,
    inNav: true,
  },
  {
    path: '/flip-resize',
    name: 'Flip on resize',
    element: <FlipResizePage />,
    inNav: true,
  },
  {
    path: '/flip-onclick',
    name: 'Flip on click',
    element: <FlipOnClickPage />,
    inNav: true,
  },
  {
    path: '/delrow',
    name: 'del row',
    element: <DelRowPage />,
    inNav: true,
  },
  {
    path: '/addrow',
    name: 'add row ',
    element: <AddRowPage />,
    inNav: true,
  },
  {
    path: '/addrowkeyframe',
    name: 'add row key frame',
    element: <AddRowKeyFramePage />,
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
    element: <AddDelRowPage2 />,
    inNav: true,
  },
  {
    path: '/adddelrow3',
    name: 'add / del row3',
    element: <AddDelRowPage3 />,
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
] as const;
