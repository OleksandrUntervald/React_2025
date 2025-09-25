import {Link} from "react-router-dom";
import {CommentsComponent} from "../CommentsComponent.tsx";
import {UsersPlaceholderComponent} from "../UsersPlaceholderComponent.tsx";
import {UsersDummyComponent} from "../UsersDummyComponent.tsx";
import {PostsPlaceholderComponents} from "../PostsPlaceholderComponents.tsx";
import {PostsDummyComponents} from "../PostsDummyComponents.tsx";


export const Menu = () => {
    return(
        <ul className='flex justify-around'>
            <li><Link to={'/users/jsonplaceholder'}><UsersPlaceholderComponent/></Link></li>
            <li><Link to={'/users/dummyjson'}><UsersDummyComponent/></Link></li>
            <li><Link to={'/posts/jsonplaceholder'}><PostsPlaceholderComponents/></Link></li>
            <li><Link to={'/posts/dummyjson'}><PostsDummyComponents/></Link></li>
            <li><Link to={'/comments/jsonplaceholder'}><CommentsComponent/></Link></li>
        </ul>
    )
}

