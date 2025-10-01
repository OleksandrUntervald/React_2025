import type {IDummyUser} from "../../modules/IUsersDummy.ts";
import type {FC} from "react";

type UserDummyProps = {
    userDummyValue: IDummyUser
}

export const UserDummyComponents: FC<UserDummyProps> = ({userDummyValue}) => {
    return (
        <div>

                {userDummyValue.age}

        </div>
    )
}
