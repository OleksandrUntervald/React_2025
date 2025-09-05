import type {ISimpson} from "../../models/ISimpson.ts";
import type {ReactNode} from "react";

type CharacterComponent = {
    item : ISimpson,
    children?: ReactNode

}

export const CharacterComponent = ({item, children}: CharacterComponent) => {
    return (
        <div className='flex flex-col items-center  gap-2 border-2 px-4'>
            <p>name: {item.name}</p>
            <p>surname: {item.surname}</p>
            <p>Age: {item.age}</p>
            <p>info: {children}</p>
            <img src={item.photo} alt=""/>

        </div>
    )
}