import type {ITodo} from "../../modules/ITodo.ts";
import type {FC} from "react";

type PropsTodo = {
    todo: ITodo
}

export const TodoComponent: FC<PropsTodo> = ({todo}) => {
    return (
        <div>
            {todo.id} {todo.title}{todo.completed.toString()}
        </div>
    )
}