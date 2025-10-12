import type {IUserResponse} from "../modules/IUsersResponse.ts";

const url = 'https://dummyjson.com';


export const getUsers = async (page: string): Promise<IUserResponse> => {
    const limit = 30;
    const skip = limit * (+page) - limit;
    const response = fetch(url + '/users' + '?skip=' + skip)
        .then(value =>  value.json())
    return response
}