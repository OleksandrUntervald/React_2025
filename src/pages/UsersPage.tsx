import {usersSliceAction} from "../redux/userSlice/userSlice.ts";
import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";

const UsersPage = () => {
  const {users, loadState} = useAppSelector(({userSlice}) => userSlice)
    const dispatch = useAppDispatch()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
         dispatch(usersSliceAction.loadUsers())
    }, []);
    return (
        <div>
            <div>{!loadState && <div>loading...</div> }</div>
            {
                users.map((user) => {
                    return <div key={user.id}>{user.name}</div>
                })
            }

        </div>
    );
};

export default UsersPage;