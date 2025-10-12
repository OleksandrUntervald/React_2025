import {UserComponent} from "./UserComponent.tsx";
import type {IUserResponse, IUsers} from "../modules/IUsersResponse.ts";
import {useEffect, useState} from "react";
import {getUsers} from "../services/api.service.ts";
import {useSearchParams} from "react-router-dom";

export const UsersComponent = () => {

    const [users, setUsers] = useState<IUsers[]>([]);
    const [searchParams] = useSearchParams({page: '1'});

    useEffect(() => {
        const currentPage = searchParams.get('page') || '1';
        getUsers(currentPage).then(({users}: IUserResponse) => {

            setUsers(users);
        })

    }, [searchParams])

    return(

        <div>
            {users.map((user: IUsers, index: number) => <UserComponent user={user} key={index} />)}
        </div>
    )
}