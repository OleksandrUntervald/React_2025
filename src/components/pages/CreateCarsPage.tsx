import {useForm} from "react-hook-form";
import type {ICar} from "../../models/ICar.ts";
import {CarValidator} from "../../validators/carValidator.tsx";
import {joiResolver} from "@hookform/resolvers/joi";
import {addCar} from "../../services/api.services.ts";

export const CreateCarsPage = () => {
    const {register, handleSubmit,formState: {errors}} = useForm<ICar>({
        mode:'all',
        resolver: joiResolver(CarValidator)
    });
    const createHandler = (data: ICar) => {
        addCar(data)
    }
    return (
        <div>
            <form onSubmit={handleSubmit(createHandler)}>
                <div>
                    <input className='border-2' type="text" {...register('brand')}/>
                    <div>{errors.brand?.message}</div>
                </div>

                <div>
                    <input className='border-2 ' type="number" {...register("price")}/>
                    <div>{errors.price?.message}</div>
                </div>

                <div>
                    <input className='border-2' type="number" {...register('year')}/>
                    <div>{errors.year?.message}</div>
                </div>
                <button className='border-2'>save car</button>


            </form>
        </div>
    )
}