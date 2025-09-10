import type {ITodo} from "../modules/ITodo.ts";
import type {IPost} from "../modules/IPosts.ts";
import type {IComments} from "../modules/IComments.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';
const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';
const endpointComments = import.meta.env.VITE_API_BASE_URL + '/comments';

export const LoadTodo = async (): Promise<ITodo[]> => {
    return await fetch(endpointTodos)
        .then(value  => value.json())
}


export const LoadPost = async (): Promise<IPost[]> => {
    return await fetch(endpointPosts)
        .then(valuePost  => valuePost.json())
}


export const LoadComments = async (): Promise<[IComments]> => {
    return await fetch(endpointComments)
        .then(valueComments  => valueComments.json())
}