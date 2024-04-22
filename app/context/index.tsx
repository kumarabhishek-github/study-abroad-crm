"use-client"
import { createContext,useContext,useState } from "react"
// src/types.ts
type UserData = {
  user: any; // Replace 'any' with the actual type of user data
  session: any; // Replace 'any' with the actual type of token data
  // Add other properties as needed
};
export interface AppContextType {
  isLoggedIn: boolean;
  user: string | null;
  token: string | null;
//   toggleLogin: () => void;
  toggleLogin: (data: UserData) => void; // Update toggleLogin type
}




const initialState: AppContextType = {
  isLoggedIn: false,
  user: "",
  token: "",
  toggleLogin: () => {},
};

export const AppContext = createContext<AppContextType>(initialState);

export const AppProvider = ({ children }:{
children: React.ReactNode;
}) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
    initialState.isLoggedIn,
  );
  const [user, setUser] = useState<string | null>(initialState.user);
  const [token, setToken] = useState<string | null>(initialState.token);

  
  const toggleLogin = (data: UserData) => {
    if (data) {
    setIsLoggedIn(true);
    setUser(data.user.email);
    setToken(data.session.access_token);
    }
  };

  return (
    <AppContext.Provider value={{ isLoggedIn, user, toggleLogin,token }}>
      {children}
    </AppContext.Provider>
  );
};

export function useAppContext (){
    return useContext(AppContext);
}