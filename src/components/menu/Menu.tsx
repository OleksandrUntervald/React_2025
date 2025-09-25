import {Link} from "react-router-dom";
import {CommentsComponent} from "../CommentsComponent.tsx";
import {PostsComponents} from "../PostsComponents.tsx";
import {UsersComponent} from "../UsersComponent.tsx";
import {ProductsComponents} from "../ProductsComponents.tsx";

export const Menu = () => {
    return(
        <ul className='flex justify-around'>
            <li><Link to={'/users'}><UsersComponent/></Link></li>
            <li><Link to={'/posts'}><PostsComponents/></Link></li>
            <li><Link to={'/comments'}><CommentsComponent/></Link></li>
            <li><Link to={'/products'}><ProductsComponents/></Link></li>
        </ul>
    )
}