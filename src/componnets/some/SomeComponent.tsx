import { useEffect } from "react";
import {useSearchParams} from "react-router-dom";

export const SomeComponent =  () => {
    const [query, setQuery] = useSearchParams();
    useEffect(() => {
        const pg = query.get('pg');
        fetch(`https://jsonplaceholder.typicode.com/users/${pg}`)
            .then(value =>  value.json())
            .then(values => {
            console.log(values)
            })

    }, [query])
   return (
       <div className=''>
   some content
   </div>)
}