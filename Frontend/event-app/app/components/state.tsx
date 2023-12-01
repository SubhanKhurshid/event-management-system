import axios from "axios";
import {atom, useAtom} from "jotai";

export const userAtom = atom(null)l

export const useUser = () => {
    const [user, setUser] = useAtom(userAtom);

    const loginUser = async () => {
        const response = await axios.post("http://localhost:8800/api/users/signin")
    }


}