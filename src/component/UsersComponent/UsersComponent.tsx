import {useEffect, useState} from "react";
import type {IUser} from "./../../modules/IUser.ts";
import {UserComponent} from "../UserComponet/UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(response => {
                setUsers(response)
            });
    }, [])
    return (
        <div>
            {
                users.map(value => <UserComponent key={value.id} item={value}/>)
            }
        </div>
    )
}