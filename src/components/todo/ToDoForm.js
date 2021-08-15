import React, { useState } from 'react';
import {v4 as uuidv4 } from "uuid";

const initialState = {
  email: "",
  password: "",
}

const ToDoForm = ({addUser, formToggler}) => {
  const [ user, setUser] = useState(initialState);

  const onHandleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({...prev, [name]: value }));
  }

  const onHandleSubmit = (e) => {
    e.preventDefault();
    addUser({...user, id: uuidv4()});
    setUser({ ...initialState });
    formToggler();
  }

  return (
    <>
    <form onSubmit={onHandleSubmit}>
      <label>
          Email
          <input type="text" name="email" placeholder="email"
            value={user.email} onChange={onHandleChange} />
      </label>

      <label>
          Password
          <input type="password" name="password" placeholder="password"
            value={user.password} onChange={onHandleChange} />
          {/* <button type="button">seePass</button> */}
      </label>

      
        <button type='submit'>Add user</button>
        <button type='button' onClick={formToggler}>Close</button>
    </form>
</>
  );
}

export default ToDoForm;