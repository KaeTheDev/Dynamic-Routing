import type { JSX } from "react";

export interface BlogPost {
    id: number;
    slug: string;
    title: string;
    content: string;
  }
  
  export interface AuthContextType {
    isAuthenticated: boolean;
    login: () => void;
    logout: () => void;
  }

  export interface ProtectedRouteProps {
    children: JSX.Element;
  }