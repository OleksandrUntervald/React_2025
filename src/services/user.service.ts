import axios from "axios";
import type {IUser} from "../models/IUser.ts";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {'Content-Type': 'application/json'},
});

export const getAllUsers = async (): Promise<IUser[]> => {
     const {data} = await axiosInstance.get<IUser[]>("/users");
     return data

}