import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
   const [user, setUser] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null);

   useEffect(() => {
      if (user)
         localStorage.setItem('user', user ? JSON.stringify(user) : null);
      else localStorage.removeItem('user');
   }, [user]);
   
   return (
      <UserContext.Provider value={{ user, setUser }}>
         {children}
      </UserContext.Provider>
   );
};
