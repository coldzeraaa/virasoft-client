'use client';

import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const getSystemTheme = () => (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

  const [theme, setTheme] = useState(() => (typeof window !== 'undefined' ? localStorage.getItem('theme') || getSystemTheme() : 'light'));

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <input
      type="checkbox"
      checked={theme === 'dark'}
      onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
      className="theme-controller toggle col-span-2 col-start-1 row-start-1 border-sky-400 bg-amber-300 [--tglbg:theme(colors.sky.500)] checked:border-blue-800 checked:bg-blue-300 checked:[--tglbg:theme(colors.blue.900)]"
    />
  );
}
