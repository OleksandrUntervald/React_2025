import type {IUserPlaceholder} from "../../modules/IUsersPlaceholder.ts";
import type {FC} from "react";

type userPlaceholderPropsType = {
    userPlaceholder: IUserPlaceholder;
}

export const UserPlaceholderComponent: FC<userPlaceholderPropsType> = ({userPlaceholder}) => {
    return (
        <div>
            <p>{userPlaceholder.name}</p>
        </div>
    )
}