import {Link} from "react-router-dom";



export const Menu = () => {
    return(
        <ul className='flex justify-around bg-red-500'>
            <li><Link to={'/users/jsonplaceholder'}><div>users placeholder</div></Link></li>
            <li><Link to={'/users/dummyjson'}><div>users dummy</div></Link></li>
            <li><Link to={'/posts/jsonplaceholder'}><div>posts placeholder</div></Link></li>
            <li><Link to={'/posts/dummyjson'}><div>posts dummyjson</div></Link></li>
            <li><Link to={'/comments/jsonplaceholder'}><div>comments jsonplaceholder</div></Link></li>
            <li><Link to={'/comments/dummyjson'}><div>comments dummyjson</div></Link></li>
        </ul>
    )
}

