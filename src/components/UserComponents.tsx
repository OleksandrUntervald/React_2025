import type {FC} from "react";
import type {IUser} from "../modules/IUser.ts";

type UserProps = {
    item: IUser
}

export const UserComponents:FC<UserProps> = ({item}) => {
    return (
        <div>
            {item.username}
        </div>
    )
}
