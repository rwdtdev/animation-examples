import { routes } from '@/routes';
import { useLocation } from 'react-router';

export function Header() {
  const location = useLocation();
  const route = routes.find((route) => route.path === location.pathname);
  return (
    <header className='border p-2 text-3xl font-bold'>
      gsap {route?.name}
    </header>
  );
}
