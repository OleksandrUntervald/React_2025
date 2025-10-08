import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import type {ICart, ICartsResponse} from "../models/ICart.ts";
import {cartService} from "../services/api.service.ts";

export const CartsComponent = () => {
    const {id} = useParams();
    const [carts, setCarts] = useState<ICart[]>([])

    useEffect(() => {
    if (id) {
        cartService.getCartsOfUser(id)
            .then(({carts}: ICartsResponse) => {
                setCarts(carts)
            });
    }
    }, [id]);
    return (
        <div>

            {
                carts.map((cart: ICart) => (
                    <div>
                        {cart.total}
                    </div>
                ))
            }
        </div>
    )
}