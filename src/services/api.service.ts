import type {IUser} from "../modules/IUser.ts";
import {urls} from "../constants/url.ts";
import type {IPost} from "../modules/IPosts.ts";



export  const userService = {
    getUsers: async (): Promise<IUser[]> => {
        return await fetch(urls.users.allUsers)
            .then(value => value.json())
    },
    getUser: async (id:number)=> {
           await fetch(urls.users.byId(id))
            .then(value => value.json())
    }
}

export const postService = {
    getAllPostsOfUserById: async (id:number): Promise<IPost[]> => {
        return await fetch(urls.posts.userPostsById(id))
            .then(value => value.json())
    }
}