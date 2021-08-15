import React, {useContext} from 'react';
import Switch from "react-switch";
import { ThemeContext } from '../../App';

const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <>
      <Switch
        onChange={changeTheme}
        checked={theme.title === "dark" ? true : false}
        // onColor={theme.colors.active}
        // offColor={theme.colors.main}
        // height={14}
    
      
      />
    </>
  )
};

export default ThemeSwitcher;
