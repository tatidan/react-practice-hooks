import {useState, useEffect} from 'react'
import themes from '../themes';


const usePersistedTheme = () => {
  const getTheme = () => {
    const storageTheme = JSON.parse(localStorage.getItem('theme'));
    return themes[storageTheme] || themes.dark;
  }

  const [theme, setTheme] = useState(getTheme());
  
  const toggler = () => {
    console.log(theme);
    theme.title === "dark"
      ? setTheme(themes.light)
      : setTheme(themes.dark);
  };


  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme.title))
  }, [theme]);


  return [theme, toggler];
};

export { usePersistedTheme };