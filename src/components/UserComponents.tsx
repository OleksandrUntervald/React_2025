import type {FC} from "react";
import type {IUser} from "../modules/IUser.ts";
import {Link, useNavigate} from "react-router-dom";

type UserProps = {
    item: IUser
}

export const UserComponents:FC<UserProps> = ({item}) => {
    const navigate = useNavigate();
    const handleOnClick = () => {
        navigate('posts/' + item.id, {state: item})
    }

    return (
        <div>
            <Link to={'details'} state={item}>UserComponents{item.username}</Link>
            <button className='border-2 bg-red-50' onClick={handleOnClick}>Details</button>
        </div>
    )
}
