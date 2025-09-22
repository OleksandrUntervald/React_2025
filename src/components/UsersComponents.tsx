
import {useEffect, useState} from "react";
import type {IUser} from "../modules/IUser.ts";
import {UserComponents} from "./UserComponents.tsx";
import {userService} from "../services/api.service.ts";

export const UsersComponents = () => {
    const [users, setUsers] = useState<IUser[]>([]);

    useEffect(() => {
        userService.getUsers().then((allUsers) => {
            setUsers(allUsers);
        })
    }, []);

    return (
        <div>
            {users.map((user) =>
                <UserComponents item={user} key={user.id} />
            )}
        </div>
    )
}