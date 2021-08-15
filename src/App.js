import React, { useState, createContext } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import Modal from './components/modal/Modal';
import ToDoForm from './components/todo/ToDoForm';
import ToDoList from './components/todo/ToDoList';
import { usePersistedTheme } from './hooks/usePersistedTheme';
// import themes from "./themes";

export const ThemeContext = createContext();
// export const LanguageContext = createContext();

function App() {

  const [theme, changeTheme] = usePersistedTheme();
  
  // const [theme, setTheme] = useState(themes.dark);

  // const changeTheme = () => {
  //   theme.title === "dark"
  //     ? setTheme(themes.light)
  //     : setTheme(themes.dark);
  // };

  const [users, setUsers] = useState([]);
  const [isFormOpen, setFormOpen] = useState(false);

  const addUser = (user) => {
    setUsers((prev) => ([...prev, user]))
  };

  const formToggler = () => setFormOpen(prev => !prev);

  return (
    <>
      {/* <LanguageContext.Provider value={language}> */}
      <ThemeContext.Provider value={{theme, changeTheme}}>
      <Header />
      <Main/>
      
      {!isFormOpen
        ? (<button onClick={formToggler}>Add user</button>)
        : (
          <Modal formToggler={formToggler}> 
            <ToDoForm addUser={addUser} formToggler={formToggler} />
          </Modal>
        )}
     
      <ToDoList users={users} />
        </ThemeContext.Provider>
        {/* </LanguageContext.Provider> */}
    </>
  );
}

export default App;
