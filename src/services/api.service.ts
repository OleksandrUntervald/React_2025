import type {IUserPlaceholder} from "../modules/IUsersPlaceholder.ts";
import {urls} from "../constants/urls.ts";
import type {IPostsPlaceholder} from "../modules/IPostsPlaceholder.ts";
import type {ICommentsPlaceholder} from "../modules/ICommentsPlaceholder.ts";
import type {IUsersDummy} from "../modules/IUsersDummy.ts";
import type {IPostsDummy} from "../modules/IPostsDummy.ts";
import type {ICommentsDummy} from "../modules/ICommentsDummy.ts";

export const userPlaceholderService = {
     getUsersPlaceholder: async (): Promise<IUserPlaceholder[]> => {
         return await fetch(urls.allUsersPlaceholder)
             .then(value =>  value.json())

     }
 }

export const postPlaceholderService = {
    getPostsPlaceholder: async (): Promise<IPostsPlaceholder[]> => {
        return await fetch(urls.allPostsPlaceholder)
            .then(value =>  value.json())

    }
}

export const commentsPlaceholderService = {
    getCommentsPlaceholder: async (): Promise<ICommentsPlaceholder[]> => {
        return await fetch(urls.allCommentsPlaceholder)
            .then(value =>  value.json())

    }
}


export const userDummyService = {
    getUsersDummy: async (): Promise<IUsersDummy> => {
        return await fetch(urls.allUsersDummy)
            .then(value =>  value.json())

    }
}

export const postDummyService = {
    getPostsDummy: async (): Promise<IPostsDummy> => {
        return await fetch(urls.allPostsDummy)
            .then(value =>  value.json())

    }
}

export const commentsDummyService = {
    getCommentsDummy: async (): Promise<ICommentsDummy> => {
        return await fetch(urls.allCommentsDummy)
            .then(value =>  value.json())

    }
}