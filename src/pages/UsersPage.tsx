import {UsersComponent} from "../componnets/UsersComponent.tsx";
import {PaginationComponent} from "../componnets/pagination-component/PaginationComponent.tsx";



export const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <PaginationComponent/>
        </div>
    )
}