import axios from "axios";
import type {IUser} from "../modules/IUser.ts";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {'Content-Type': 'application/json'},
});


export const getUsers = () => {
    const usersResponse = axiosInstance.get<IUser[]>('/users');
    return usersResponse
}