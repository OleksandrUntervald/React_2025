
import {useCallback, useEffect, useMemo, useState} from "react";
import {UserComponent} from "./UserComponent.tsx";


const UsersComponent = () => {
    console.log('users')

    const foo =  useCallback(() => {
        console.log('testFoo')
    }, [])

    const [users, setUsers] = useState([]);

    const arr: number[] = useMemo(() => {
        return [1,3,4]
    }, [])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
            .then(value => {
                setUsers(value)
            })
    }, []);
    return (
        <div>
            <UserComponent foo={foo} arr={arr}/>
        </div>
    );
};

export default UsersComponent;