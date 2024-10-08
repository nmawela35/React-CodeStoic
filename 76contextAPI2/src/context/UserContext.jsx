import React, { createContext, useState } from "react";

 const UserContext = createContext();

function UserProvider({ children }) {
  
    const [user,setUser]=useState("guest")

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}

export {UserProvider,UserContext}
