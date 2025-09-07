import type {IUser} from "../../modules/IUser.ts";
import type {FC} from "react";

type UserProps = {
    item: IUser
}

export const UserComponent: FC<UserProps> = ({item}) => {
    return (
        <div>{item.name}</div>
    )

}