import type {IUser} from "../modules/IUser.ts";
import type {FC} from "react";

type UserPropsType = {
    user: IUser
}

export const UserComponents: FC<UserPropsType> = ({user}) => {
    return (
        <div>
            {user.id}
        </div>
    )
}