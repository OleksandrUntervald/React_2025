import type {IUser} from "../modules/IUser.ts";
import {type FC, memo} from "react";

type UserComponentsPropsType = {
    user: IUser,
    foo: () => void,
    arr: number[]

}

export const UserComponents: FC<UserComponentsPropsType> = memo( ({user, foo, arr} ) => { //this line make action memo wich don`t do this component rerender
    return (
        <div onClick={foo}>
            {user.id} {arr}
        </div>
    )
} )