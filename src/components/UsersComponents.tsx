import {UserComponents} from "./UserComponents.tsx";
import {useCallback, useEffect, useMemo, useState} from "react";
import type {IUser} from "../modules/IUser.ts";
import {getUsers} from "../services/api.srevice.ts";

export const UsersComponents = () => {

   const arr = useMemo(() =>{  // in this area we have hook wich rescue this function from the rerender
       return [1,3,5]
   }, [])

    const foo = useCallback(() => { // in this area we have hook wich rescue this function from the rerender
        console.log("value");
    }, [])



    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        getUsers().then(value => {
            setUsers(value.data)
        })
    }, []);
    return (
        <div>

            {users.map((user) =>
               <UserComponents key={user.id} user={user} foo={foo} arr={arr} />)}


        </div>
    )
}