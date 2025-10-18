import axios from "axios";
import type {IUserWithTokens} from "../models/IUserWithTokens.ts";
import type {IProduct, IProductsResponse} from "../models/IProducts.ts";
import {retriveLocalStorage} from "../routes/helpers.ts";
import type {ITokenPair} from "../models/ITokenPair.ts";

type LoginData = {
    username: string;
    password: string;
    expiresInMins: number
}

const axiosInstance = axios.create({
    baseURL: "https://dummyjson.com/auth",
    headers: {}
})

axiosInstance.interceptors.request.use((requestObject) => {
    if (requestObject.method?.toUpperCase() === 'GET'){
        requestObject.headers.Authorization = 'Bearer ' +retriveLocalStorage<IUserWithTokens>('user').accessToken;
    }
    return requestObject;
})



export const login = async ({username, password, expiresInMins}: LoginData): Promise<IUserWithTokens> => {
    const {data: userWithTokens} = await axiosInstance.post<IUserWithTokens>('/login', {username, password, expiresInMins});
    console.log(userWithTokens);
    localStorage.setItem("user", JSON.stringify(userWithTokens));
    return userWithTokens
}


export const loadAuthProducts = async (): Promise<IProduct[]> => {

   const {data: {products}} = await axiosInstance.get<IProductsResponse>('/products');
    console.log(products);
   return products
}

export const refresh = async (): Promise<void> => {
    const iUserWithToken = retriveLocalStorage<IUserWithTokens>('user')
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: iUserWithToken.refreshToken,
        expiresInMin: 1
    });
    iUserWithToken.accessToken = accessToken;
    iUserWithToken.refreshToken = refreshToken;
    localStorage.setItem("user", JSON.stringify(iUserWithToken));
}