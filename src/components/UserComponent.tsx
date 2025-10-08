import type {IUsers} from "../models/IUsers.ts";
import type {FC} from "react";

type UserPropsType = {
    user: IUsers;
}
export const UserComponent: FC<UserPropsType> = ({user}) => {
    return (
        <div>
            {
                user.age
            }
        </div>
    )
}