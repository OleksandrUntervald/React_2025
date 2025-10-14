import {useForm} from "react-hook-form";

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
        mode: "all"
    });

    const customHandler   = (formDataProps: IFormProps) => {
        console.log(formDataProps)
    }
    return (

        <div>
            <form onSubmit={handleSubmit(customHandler)}>
                <input className='border-2' type="text" {...register('username', {
                    required: 'is required',
                    minLength: {value: 1, message: 'wrong name'}
                })} />
                <input className='border-2' type="text" {...register('password', {
                    required: 'is required',
                    minLength: {value: 3, message: 'pass to short'},
                    maxLength: {value: 20, message: 'pass to long'}
                })} />
                <input className='border-2' type="number" {...register('age', {
                    required: 'is required',
                    valueAsNumber: true,
                    min: {value: 1, message: 'age too small'},
                    max: {value: 117, message: 'age too big'}
                })} />
                <button disabled={!isValid} className='border-2'>send</button>
            </form>
        </div>
    )
}
