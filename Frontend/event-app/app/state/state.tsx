import { atom, useAtom } from "jotai";
import { signInApi, signUpApi } from "../services/api";

export interface User {
  UserName: string;
  UserEmail: string;
  UserPassword: string;
  UserRole: string;
  UserID: number;
}

export const userAtom = atom<User | null>(null);

export const useUser = () => {
  const [user, setUser] = useAtom(userAtom);

  const loginUser = async (credentials: {
    UserName: string;
    UserEmail: string;
    UserPassword: string;
  }) => {
    try {
      const user = await signInApi(credentials);
      setUser(user);
    } catch (error) {
      console.error("Login failed", error);
      // Handle login failure as needed
    }
  };

  const logoutUser = () => {
    setUser(null);
  };

  return { user, loginUser, logoutUser };
};
