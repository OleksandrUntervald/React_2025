import type {ITodo} from "../modules/ITodo.ts";
import type {IPost} from "../modules/IPosts.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos';

const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';

export const LoadTodo = async (): Promise<ITodo[]> => {
    return await fetch(endpointTodos)
        .then(value  => value.json())
}


export const LoadPost = async (): Promise<IPost[]> => {
    return await fetch(endpointPosts)
        .then(valuePost  => valuePost.json())
}