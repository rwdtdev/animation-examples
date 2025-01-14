import { Outlet } from 'react-router';
import { Aside } from '@/components/Aside';
import { Header } from '@/components/Header';

export function MainLayout() {
  return (
    <div className='flex h-dvh border-2'>
      <Aside />
      <div className='flex grow flex-col border border-orange-500'>
        <Header />
        {/* <main className='flex grow flex-col border border-green-500 p-2'> */}
        <main className='flex grow flex-col overflow-hidden border border-green-500 p-2'>
          <Outlet />
        </main>
        <footer className='z-10 bg-white'>footer</footer>
      </div>
    </div>
  );
}
