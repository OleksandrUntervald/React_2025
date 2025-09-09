import {TodoComponent} from "../TodoComponent/TodoComponent.tsx";
import {useEffect, useState} from "react";
import type {ITodo} from "../../modules/ITodo.ts";
import {LoadTodo} from "../../services/api.service.ts";

export const TodoComponents = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);
    useEffect(() => {
        LoadTodo().then(values => setTodos(values))
    }, []);
    return (
        <div>

            {todos.map((todo, index) =>
                <TodoComponent key={index} todo={todo}/>
            )}

        </div>
    )
}