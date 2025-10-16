import {useEffect, useState} from "react";
import {getCars} from "../../services/api.services.ts";
import type {ICar} from "../../models/ICar.ts";

export const CarsPage = () => {
    const [cars, setCars] = useState<ICar[]>([]);
    useEffect(() => {
        getCars().then((carValue) => {
             setCars(carValue);
        })
    }, []);
    return (
        <div>
            {cars.map((car,index) =>
                <div key={index}>
                    {car.brand}
                  </div>)}
        </div>
    )
}