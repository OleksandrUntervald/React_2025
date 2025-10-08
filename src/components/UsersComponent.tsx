import {useEffect, useState} from "react";
import type {IUsers} from "../models/IUsers.ts";
import {getAll} from "../services/general.api.service.ts";
import type {IBaseResponseModel} from "../models/IBaseResponseModel.ts";
import {UserComponent} from "./UserComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUsers[]>([])
    useEffect(() => {
    getAll<IBaseResponseModel & {users: IUsers[]}>('/users')
        .then(({users}) => setUsers(users))
    }, [])
    return (

        <div>
            {
                users.map((user, userIndex) =>
                    <UserComponent key={userIndex} user={user}/>
                )
            }
        </div>

    )

}