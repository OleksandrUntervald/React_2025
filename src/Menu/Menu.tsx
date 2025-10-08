import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to='/users'>users</Link>
                </li>
                <li>
                    <Link to='/post'>post</Link>
                </li>
            </ul>
        </div>
    )
}