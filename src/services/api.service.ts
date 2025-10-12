import type {IReqResInResponse} from "../modules/IReqResInResponse.ts";

const API_KEY = "reqres-free-v1";

export const getAllUsers = async (pg: string):Promise<IReqResInResponse> => {
    return   await fetch(`https://reqres.in/api/users?page=${pg}`,{
       headers: {'x-api-key': API_KEY},
   })
        .then(res => res.json())
}
