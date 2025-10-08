import { useEffect, useState} from "react";
import type {IUser, IUsersResponse} from "../models/IUser.ts";
import {UserComponent} from "./UserComponent.tsx";
import {userService} from "../services/api.service.ts";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getAllUsers()
            .then(({users}: IUsersResponse) => {
                setUsers(users);
            })
    }, []);

    return(
        <div>
            {users.map((user: IUser, index) => <UserComponent user={user} key={index}/>
 )}

    </div>)
}