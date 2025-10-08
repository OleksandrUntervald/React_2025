import type {IUser} from "../models/IUser.ts";
import {useNavigate} from "react-router-dom";
import type {FC} from "react";

type Props = {
    user: IUser
}

export const UserComponent: FC<Props> =  ({user}) => {
    const navigation = useNavigate();
    const onButtonClickNavigation = () => {
        navigation('/users/' +  user.id + '/carts')
    }
    return (
        <div>
            { user.username}
            <button onClick={onButtonClickNavigation} className='border-2 cursor-auto'>click me</button>
        </div>
    )
}