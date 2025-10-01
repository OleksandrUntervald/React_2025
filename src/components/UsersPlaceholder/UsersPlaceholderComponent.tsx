import {UserPlaceholderComponent} from "./UserPlaceholderComponent.tsx";
import {useEffect, useState} from "react";
import type {IUserPlaceholder} from "../../modules/IUsersPlaceholder.ts";
import {userPlaceholderService} from "../../services/api.service.ts";


export const UsersPlaceholderComponent = () => {
    const [usersPlaceholder, setUsersPlaceholder] = useState<IUserPlaceholder[]>([])

    useEffect(() => {
        userPlaceholderService.getUsersPlaceholder()
            .then((allUsersPlaceholder) =>{
          setUsersPlaceholder(allUsersPlaceholder)
      })
    }, []);
    return (
        <div>
            {
                usersPlaceholder.map((userPlaceholder,indexPlaceholder) =>
                    <UserPlaceholderComponent userPlaceholder={userPlaceholder} key={indexPlaceholder} />
                )
            }
        </div>
    )
}