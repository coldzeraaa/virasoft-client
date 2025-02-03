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
    <div className={`grid gap-4 ${cols[items.length]}`}>
      {resolvedItems.map((item, idx) => (
        <div key={idx}>{item.component}</div>
      ))}
    </div>
  );
}

const cols = ['grid-cols-1', 'grid-cols-1', 'grid-cols-2'];

interface GridContainerProps {
  items: Item[];
}
