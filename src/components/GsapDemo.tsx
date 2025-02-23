import { useCallback, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { Flip } from 'gsap/Flip';
import { Button } from './ui/button';
let count = 0;

gsap.registerPlugin(Flip);

const wrapColor = gsap.utils.wrap(['blue', 'green', 'red', 'orange']);

type Item = {
  id: number;
  color: string;
  status: string;
};

type Layout = {
  items: Item[];
  state?: Flip.FlipState;
};

function createItem() {
  return { id: ++count, color: wrapColor(count), status: 'entered' };
}

export function GsapDemo() {
  console.log('rerender GsapDemo');
  const el = useRef<HTMLDivElement | null>(null);
  const q = gsap.utils.selector(el);

  const removeItems = useCallback(
    (exitingItems: Item[]) => {
      if (!exitingItems.length) return;

      setLayout((prev) => ({
        state: Flip.getState(q('.gs-demo-box, .button')),
        items: prev.items.filter((item) => !exitingItems.includes(item)),
      }));
    },
    [q],
  );

  const [layout, setLayout] = useState<Layout>(() => ({
    items: [createItem(), createItem(), createItem(), createItem()].reverse(),
  }));

  useGSAP(
    () => {
      console.log('useGSAP');
      if (!layout.state) return;

      // get the items that are exiting in this batch
      const exiting = layout.items.filter((item) => item.status === 'exiting');
      // Flip.from returns a timeline
      const timeline = Flip.from(layout.state, {
        absolute: true,
        ease: 'power1.inOut',
        targets: q('.gs-demo-box, .button'),
        scale: true,
        simple: true,
        onEnter: (elements) => {
          return gsap.fromTo(
            elements,
            {
              opacity: 0,
              scale: 0,
            },
            {
              opacity: 1,
              scale: 1,
              delay: 0.2,
              duration: 0.3,
            },
          );
        },

        onLeave: (elements) => {
          return gsap.to(elements, {
            opacity: 0,
            scale: 0,
          });
        },
        onComplete() {
          // works around a Safari rendering bug (unrelated to GSAP). Things reflow narrower otherwise.
          const boxes = document.querySelector('.boxes'),
            lastChild = boxes?.lastChild;
          boxes?.appendChild(lastChild!);
        },
      });

      // remove the exiting items from the DOM after the animation is done
      timeline.add(() => removeItems(exiting));
    },
    {
      dependencies: [layout, q, removeItems],
    },
  );

  const addItem = () => {
    setLayout({
      state: Flip.getState(q('.gs-demo-box, .button')),
      items: [createItem(), ...layout.items],
    });
  };

  const shuffle = () => {
    setLayout({
      state: Flip.getState(q('.gs-demo-box, .button')),
      items: [...gsap.utils.shuffle(layout.items)],
    });
  };

  const remove = (item: Item) => {
    console.log('remove');
    // set the item as exiting which will add a CSS class for display: none;
    item.status = 'exiting';

    setLayout({
      ...layout,
      state: Flip.getState(q('.gs-demo-box, .button')),
    });
  };

  return (
    <div className='app text-center' ref={el}>
      <div>
        <Button className='button mr-2' onClick={addItem}>
          Add Box
        </Button>
        <Button className='button' onClick={shuffle}>
          Shuffle
        </Button>
      </div>
      <div className='boxes flex flex-row flex-wrap'>
        {layout.items.map((item) => {
          console.log('render list');
          return (
            <div
              id={`gs-demo-box-${item.id}`}
              key={item.id}
              className={`gs-demo-box bg-${item.color}-500 ${item.status} m-3 rounded-md p-3 ${['exiting', 'exited'].includes(item.status) ? 'hidden' : ''}`}
              onClick={() => remove(item)}
            >
              Click Me
            </div>
          );
        })}
      </div>
    </div>
  );
}
