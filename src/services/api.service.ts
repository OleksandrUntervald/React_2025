import type {ITodo} from "../modules/ITodo.ts";

const endpointTodos = import.meta.env.VITE_API_BASE_URL + '/todos'

export const LoadTodo = async (): Promise<ITodo[]> => {
    return await fetch(endpointTodos)
        .then(value  => value.json())
}