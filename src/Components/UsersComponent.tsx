
import {useCallback, useEffect, useState} from "react";
import {UserComponent} from "./UserComponent.tsx";


const UsersComponent = () => {
    console.log('users')

    const foo =  useCallback(() => {
        console.log('testFoo')
    }, [])

    const [users, setUsers] = useState()
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
            .then(value => {
                setUsers(value)
            })
    }, []);
    return (
        <div>
            <UserComponent foo={foo}/>
        </div>
    );
};

export default UsersComponent;