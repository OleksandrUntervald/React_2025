import {useFetch} from "../hooks/useFetch.tsx";
import type {IUser} from "../modules/IUser.ts";
import {UserComponents} from "./UserComponents.tsx";

export const UsersComponents = () => {
    const usersValue = useFetch<IUser[]>('https://jsonplaceholder.typicode.com/users');
if (!usersValue) return <div>Loading</div>
    return (
        <div>

            {usersValue.map((user: IUser, index:number) => <UserComponents key={index} user={user}/>)}

        </div>
    )
}