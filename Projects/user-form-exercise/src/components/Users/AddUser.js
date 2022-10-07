import React from 'react';

const AddUser = (props) => {
  const userSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={userSubmitHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="Age">Age (Years)</label>
      <input id="Age" type="number" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
