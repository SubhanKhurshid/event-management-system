import axios from 'axios';

export const signInApi = async (credentials: { UserName: string, UserEmail: string, UserPassword: string }) => {
  try {
    const response = await axios.post("http://localhost:8800/api/users/signin", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUpApi = async (credentials: { UserName: string, UserEmail: string, UserPassword: string }) => {
  try {
    const response = await axios.post("http://localhost:8800/api/users/signup", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};
