import { useState } from 'react';
import { AnimatedTab } from './AnimatedTab';

const tabs = ['one', 'two', 'three very large tab'] as const;

export type Tab = (typeof tabs)[number];

export function TabsExamplePage() {
  const [selectedTab, setSelectedTab] = useState<Tab>(tabs[0]);
  return (
    <>
      <AnimatedTab
        tabs={tabs}
        selectedTab={selectedTab}
        setSelectedTab={setSelectedTab}
      />
      <div className='flex grow border border-blue-500'>
        <span className='m-auto text-5xl font-bold'>{selectedTab}</span>
      </div>
    </>
  );
}
