import React, {useContext} from 'react';
import { ThemeContext } from '../../App';
import { MainContainer } from './MainStyled';

const Main = () => {
  const { theme } = useContext(ThemeContext);
  
  return (
    <MainContainer colors={theme.colors}>
      <h2>Main</h2>
    </MainContainer>
  )
};

export default Main;
