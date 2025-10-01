import { useEffect, useState } from "react";
import type {IDummyUser, IUsersDummy} from "../../modules/IUsersDummy.ts";
import { userDummyService } from "../../services/api.service.ts";
import { UserDummyComponents } from "./UserDummyComponents.tsx";

export const UsersDummyComponent = () => {
    const [usersDummy, setUsersDummy] = useState<IDummyUser[]>([]);

    useEffect(() => {
        userDummyService.getUsersDummy()
                .then(({users}: IUsersDummy) => {
                setUsersDummy(users);
            });
    }, []);


    return (
        <div>
            {usersDummy.map((userDummyValue: IDummyUser, index: number) => (
                <UserDummyComponents key={index} userDummyValue={userDummyValue} />
            ))}
        </div>
    );
};
