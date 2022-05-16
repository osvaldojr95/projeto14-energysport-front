import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export default function UserProvider({ children }) {
  const [userInfo, setUserInfo] = useState({});
  const [produto, setProduto] = useState({});

  return (
    <UserContext.Provider
      value={{
        produto,
        setProduto,
        userInfo,
        setUserInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
export function useUser() {
  const context = useContext(UserContext);
  const { produto, setProduto, userInfo, setUserInfo } = context;
  return { produto, setProduto, userInfo, setUserInfo };
}