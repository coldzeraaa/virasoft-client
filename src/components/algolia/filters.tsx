'use client';
import { useMemo } from 'react';

import { useRefinementList } from 'react-instantsearch';

const OptionFilter = ({ attribute, title, optionKey }: { attribute: string; title: string; optionKey: string }) => {
  const { items, refine } = useRefinementList({ attribute });

  const filteredItems = useMemo(
    () =>
      items
        .filter((item) => item.label.startsWith(`${optionKey}||`))
        .map((item) => ({
          ...item,
          displayLabel: item.label.split('||')[1],
        })),
    [items, optionKey],
  );

  if (filteredItems.length === 0) return null;

  return (
    <div className="collapse collapse-plus bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">{title}</div>
      <div className="collapse-content">
        {filteredItems.map((item) => (
          <label key={item.label} className="label cursor-pointer justify-start gap-2">
            <input type="checkbox" checked={item.isRefined} onChange={() => refine(item.label)} className="checkbox checkbox-sm" />
            <span className="label-text">
              {item.displayLabel} ({item.count})
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export const Filters = () => {
  const { items } = useRefinementList({ attribute: 'options' });

  const optionTypes = useMemo(() => {
    const uniqueKeys = new Set(items.map((item) => item.label.split('||')[0]));

    return Array.from(uniqueKeys).map((key) => ({
      key,
      title: key
        .replace('build_', '')
        .split('_')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' '),
    }));
  }, [items]);

  return (
    <div className="menu w-full rounded-box bg-base-200">
      <div className="menu-title px-4 py-2">Filters</div>
      <div className="divide-y divide-base-300">
        {optionTypes.map(({ key, title }) => (
          <OptionFilter key={key} attribute="options" title={title} optionKey={key} />
        ))}
      </div>
    </div>
  );
};
