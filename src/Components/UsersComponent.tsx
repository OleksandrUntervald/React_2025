
import {useCallback, useMemo  } from "react";
import {UserComponent} from "./UserComponent.tsx";
import UseFetch from "../hooks/useFetch.tsx";


const UsersComponent = () => {

    const users = UseFetch()
    const foo =  useCallback(() => {
        console.log('testFoo')
    }, [])


    const arr: number[] = useMemo(() => {
        return [1,3,4]
    }, [])


    return (
        <div>

            {users.map((value, index) =>   <UserComponent key={index} item={value} foo={foo} arr={arr}/>)}
        </div>
    );
};

export default UsersComponent;