import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "./validation/user.validator.ts";

interface IFormProps {
    username: string,
    password: string,
    age: number
}

export const FormComponent = () => {
    const {
        handleSubmit,
        register,
        formState: { errors, isValid }
    } = useForm<IFormProps>({
        mode: "all",
        resolver: joiResolver(userValidator)
    });

    const customHandler   = (formDataProps: IFormProps) => {
        console.log(formDataProps)
    }

    return (

       <div>
           <div>
               <form onSubmit={handleSubmit(customHandler)}>
                   <label>
                       <input className='border-2' type="text" {...register('username')} />
                       {errors.username && <div>{errors.username.message}</div>}
                   </label>

                   <label>
                       <input className='border-2' type="text" {...register('password')} />
                       {errors.password && <div>{errors.password.message}</div>}
                   </label>
                   <label>
                       <input className='border-2' type="number" {...register('age')} />
                       {errors.age && <div>{errors.age.message}</div>}
                   </label>

                   <button disabled={!isValid} className='border-2'>send</button>
               </form>
           </div>

       </div>

    )
}
