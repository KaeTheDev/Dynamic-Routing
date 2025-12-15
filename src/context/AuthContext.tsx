import React, { useState } from "react";
import type { AuthContextType } from "../types";

const AuthContext = React.createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

const[isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

// Functions to update auth store
const login = () => setIsAuthenticated(true);
const logout = () => setIsAuthenticated(false);

    return(
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;