import React from "react";
import axios from "axios";
import { atom, useAtom } from "jotai";
interface Users {
  UserName: string;
  UserEmail: string;
  UserPassword: string;
}
export const userAtom = atom(null);

function Login() {
  const [user, setUser] = useAtom(userAtom);

  const handleClick = () => {
    const reponse = axios.post("http://localhost:8800/api/users/signin", {});
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ml-72">
      <div className="bg-black borde-2 border-gray-500 px-10 py-10 shadow-2xl shadow-white">
        <div className="text-white font-bold">Login</div>
        <div className="flex flex-col space-y-5">
          <label>Name</label>
          <input
            type="name"
            id="name"
            className="w-full px-10 py-2 text-left bg-transparent text-[#cccccc] placeholder-gray-600 focus:outline-none border-2 border-gray-500 rounded-lg"
            placeholder="Enter your name"
            name="name"
            value={user.name}
            onChange={(e) => handleChange(e)}
          />
          <label>Email</label>
          <input
            type="email"
            id="signup-email"
            className="w-full px-10 py-2 text-left bg-transparent text-[#cccccc] placeholder-gray-600 focus:outline-none border-2 border-gray-500 rounded-lg"
            placeholder="Enter your email"
            name="email"
            value={details.email}
            onChange={(e) => handleChange(e)}
          />
          <label>Password</label>
          <input
            type="password"
            id="signup-password"
            className="w-full px-10 py-2 text-left bg-transparent text-[#cccccc] placeholder-gray-600 focus:outline-none border-2 border-gray-500 rounded-lg"
            placeholder="Enter your Password"
            name="password"
            value={details.password}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="hover:shadow-blue-600/40 mt-10 rounded-xl text-center  bg-gradient-to-r   from-[#6c72cb] to-[#cb69c1] px-9 py-3 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg">
          <button onClick={handleClick}>Login In</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
