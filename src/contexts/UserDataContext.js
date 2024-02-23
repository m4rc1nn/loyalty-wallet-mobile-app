import React, {createContext, useState} from 'react';

export const UserDataContext = createContext([]);

export default function UserDataContextProvider({children}) {
  const [user, setUser] = useState(false);
  
  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      { children }
    </UserDataContext.Provider>
  )
}
