import React, {useContext} from 'react';
import { ThemeContext } from '../../App';
import { HeaderContainer } from './HeaderStyled';
import ThemeSwitcher from './ThemeSwitcher';


const Header = () => {
  const { theme } = useContext(ThemeContext);  
  // console.log(theme);

  return (
    <div>
      <HeaderContainer colors={theme.colors}>
        <h4 className="headerLogo">Logo</h4>
        <ThemeSwitcher/>
      </HeaderContainer> 

    </div>
  )
};

export default Header;
