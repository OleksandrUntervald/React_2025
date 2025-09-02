import type {ReactNode} from "react";

type NewComponetsType =  {
    title: string,
    children?: ReactNode
};



const NewComponets = ({title, children}: NewComponetsType) => {
 return (
     <div>
         <h1>{title}</h1>
         <p>{children}</p>
     </div>
 )
}

export default NewComponets;