import {useEffect, useState} from "react";
import {useSearchParams} from "react-router-dom";
import type { IUser} from "../../modules/IReqResInResponse.ts";
import {getAllUsers} from "../../services/api.service.ts";

export const SomeComponent =  () => {
    const [users, setUsers] = useState<IUser[]>([])
    const [query] = useSearchParams();
    useEffect(() => {
        const pg = query.get('pg');
        getAllUsers(pg || '1').then(value =>
        setUsers(value.data));


    }, [query])
   return (
       <div className=''>
           {users.map((user, index) => <div key={index}>
               {user.id}{user.first_name}
               <img src={user.avatar} alt=""/>
           </div>)}
   </div>)
}