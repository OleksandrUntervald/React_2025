import type {IUsers} from "../modules/IUsersResponse.ts";
import type {FC} from "react";

type UserPropsType = {
    user: IUsers
}

export const UserComponent: FC<UserPropsType> = ({user}) => {
    return(
        <div>
            {user.id}{user.lastName}
        </div>
    )
}