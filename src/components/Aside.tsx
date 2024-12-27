import React from 'react';
import { routes } from '@/routes';
import { NavLink } from 'react-router';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(useGSAP);

export function Aside() {
  const refAside = React.useRef<HTMLElement | null>(null);

  const sideBarWidth = React.useRef(200);

  const { contextSafe } = useGSAP(() => {}, {});

  const onResizeBtnClick = contextSafe(() => {
    if (sideBarWidth.current === 200) {
      sideBarWidth.current = 50;
    } else {
      sideBarWidth.current = 200;
    }
    gsap.to(refAside.current, { width: sideBarWidth.current });
  });
  return (
    <aside
      ref={refAside}
      className={`aside w-[200px] shrink-0 grow-0 overflow-hidden border border-x-8 border-blue-500 border-x-white bg-white py-2`}
    >
      <button className='truncate' onClick={onResizeBtnClick}>
        resize SideBar
      </button>
      <nav>
        <ul>
          {routes.map((route) => (
            <li key={route.path} className='text-nowrap'>
              <NavLink
                to={route.path}
                className={({ isActive }) =>
                  isActive ? 'text-red-500' : 'text-black'
                }
              >
                {route.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
