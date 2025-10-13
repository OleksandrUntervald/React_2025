import {type FormEvent, useState} from "react";

interface IFormProps {
    username: string,
    password: string
}

export const FormComponents = () => {

    const [formState, setFormState] = useState<IFormProps>({
        username: '',
        password: ''
    })
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        let user = {
            username: formState.username,
            password: formState.password
        };
        console.log(user)

    }

    const handleInputChange = (e: FormEvent<HTMLFormElement>)  => {
        const input = e.target as HTMLInputElement;
        console.log(input.name)
        setFormState({...formState, [input.name]: input.value });
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input className='border-2' type="text" name={'username'} value={formState.username} onChange={handleInputChange}/>
                <input className='border-2' type="text" name={'password'} value={formState.password} onChange={handleInputChange}/>
                <button className='border-2'>send</button>
            </form>
        </div>
    )
}
