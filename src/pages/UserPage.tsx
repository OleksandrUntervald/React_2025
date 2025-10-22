import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useAppSelector} from "../redux/hooks/useAppSelector.tsx";
import {useAppDispatch} from "../redux/hooks/useAppDispatch.tsx";
import {usersSliceAction} from "../redux/userSlice/userSlice.ts";


const UserPage = () => {
   const {id} = useParams()
    const  {user, loadState}  = useAppSelector(({userSlice}) => userSlice);
   const dispatch = useAppDispatch();
    useEffect(() => {
        if (id) dispatch(usersSliceAction.loadUser(id));
    }, [id])
    return (
     <div>
         <div>{!loadState && <div>loading...</div> }</div>
         <div>{user && <div>{user.id} {user.name}</div>}</div>
     </div>
    );
};

export default UserPage;