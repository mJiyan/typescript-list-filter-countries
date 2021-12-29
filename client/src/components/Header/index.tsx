import React, { useEffect, useState } from 'react';

const Header = () => {
  const [theme, setTheme] = useState('light');
  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setTheme('light');
    }
  }, [])

  const darkMode = () => {
    if (theme === 'light') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setTheme('dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setTheme('light');
    }
  };

  return (
    <nav className="bg-WhiteDark dark:bg-DarkBlue h-20 shadow-md">
      <div className="flex items-center justify-between py-2 h-20 xl:px-20 lg:px-20 md:px-20 sm:px-5 xs:px-3 ">
        <span>
          <p className="font-bold xl:text-2xl lg:text-2xl md:text-2xl sm:text-md xs:text-sm  tracking-tight ">Where in the world?</p>
        </span>
        <span className="">
          <button
            className="flex flex-cols font-bold text-sm tracking-tight"
            data-testid="dark-mode"
            onClick={() => darkMode()}
          >
            {theme === 'dark' ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                stroke="none"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            )}

            <p className="px-1 font-light">Dark Mode</p>
          </button>
        </span>
      </div>
    </nav>
  );
};

export default Header;
