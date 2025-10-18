import {useEffect, useState} from "react";

const UseFetch = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(value => {
                setUsers(value)
            })
    }, []);

    return users
};

export default UseFetch;