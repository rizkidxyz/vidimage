import { useState, useEffect } from 'react';

const themes = {
  light: {
    bg: 'bg-gray-300',
    text: 'text-gray-900',
  },
  dark: {
    bg: 'bg-gray-900',
    text: 'text-gray-300',
  },
};

function ButtonTheme() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
    setTheme(currentTheme);
  }, []);

  function toggleTheme() {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.classList.remove(themes[theme].bg, themes[theme].text);
    document.body.classList.add(themes[newTheme].bg, themes[newTheme].text);
    document.body.classList.toggle('dark', newTheme === 'dark');
  }

  return (
    <button
      className="fixed top-4 right-4 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-300"
      onClick={toggleTheme}
    >
      <i
        className={`fas ${
          theme === 'light' ? 'fa-moon text-gray-900' : 'fa-sun text-yellow-500'
        } text-xl`}
      ></i>
    </button>
  );
}

export default ButtonTheme;
