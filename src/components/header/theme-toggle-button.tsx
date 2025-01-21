import { useEffect, useState } from 'react';

import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export function ThemeToggleButton() {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      return (localStorage.getItem('theme') as Theme) || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem('theme', theme);
      document.querySelector('html')?.setAttribute('data-theme', theme);
    }
  }, [theme]);

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="flex h-10 w-10 items-center justify-center rounded-full bg-base-300 text-base-content
                   transition-colors duration-300 hover:bg-base-300"
      aria-label="Toggle theme button"
    >
      <div className="relative h-5 w-5">
        <SunIcon
          className={`absolute transition-transform duration-500 ${theme === 'light' ? 'rotate-0 scale-100' : 'rotate-90 scale-0'}`}
        />
        <MoonIcon
          className={`absolute transition-transform duration-500 ${theme === 'dark' ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`}
        />
      </div>
    </button>
  );
}

type Theme = 'light' | 'dark';
