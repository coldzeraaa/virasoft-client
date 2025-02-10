import { ComponentSwitcher } from '../component';
import type { Item } from '../dynamic-component.d';

export async function GridContainer({ items = [] }: GridContainerProps) {
  const resolvedItems = await Promise.all(
    items.map(async (item: Item) => {
      const component = await ComponentSwitcher(item);
      return { ...item, component };
    }),
  );

  return (
    <div className={`grid gap-4 ${cols[(items.length || 1) - 1]}`}>
      {resolvedItems.map((item, idx) => (
        <div key={idx}>{item.component}</div>
      ))}
    </div>
  );
}

const cols = [
  'grid-cols-1',
  'grid-cols-2',
  'grid-cols-3',
  'grid-cols-4',
  'grid-cols-5',
  'grid-cols-6',
  'grid-cols-7',
  'grid-cols-8',
  'grid-cols-9',
  'grid-cols-10',
  'grid-cols-11',
  'grid-cols-12',
];

interface GridContainerProps {
  items: Item[];
}
