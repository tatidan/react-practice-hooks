import React from 'react';

const ToDoList = ({users}) => {
  return (
    <ul>
      {users.map((user) =>
        <li key={user.id}><p>{user.email}</p></li>)}
    </ul>
  )
}

export default ToDoList;
