import React, { useContext } from 'react';
import { ThemeContext } from './context';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <span>Current Theme: {theme}</span>
      <button onClick={()=>{
        setTheme('red')
      }}>Toggle Theme</button>
    </div>
  );
};

export default ThemeSwitcher;