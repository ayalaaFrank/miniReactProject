import { useState, useMemo } from 'react';

function CreateStore() {
  const [users, setUsers] = useState([
    { id: 1, name: 'admin', email: 'admin@gmail.com', password: '123456', role: 'manager' },
    { id: 2, name: 'user', email: 'user@gmail.com', password: '123456', role: 'user' },
  ]);
  const [currentUser, setCurrentUser] = useState(null);

  const store = useMemo(() => ({
    users,
    currentUser,
    login: (email, password) => {
      const user = users.find((user) => user.email === email && user.password === password);
      if (user) {
          setCurrentUser(user);
          return true;
      } else {
          return false;
      }  
    },
    logout: () => {
      setCurrentUser(null);
    },
    register: (newUser) => {
      if (users.some((user) => user.email === newUser.email)) {
        console.log("Email already exists");
      } else {
        const newId = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
        newUser.id = newId;
        setUsers((prevUsers) => [...prevUsers, newUser]);
        console.log("User registered successfully");
      }
    },
  }), [users, currentUser]);

  return store;
}

export { CreateStore };
