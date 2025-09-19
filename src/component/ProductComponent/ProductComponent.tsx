// ProductComponent.tsx
import type {FC} from "react";
import type {IProduct} from "../../modules/IProductsResponse.ts";

type PostPropsType = {
    product: IProduct
}

export const ProductComponent: FC<PostPropsType> = ({product: {id, title, description}}) => {
    return (
        <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
            <div className="text-gray-400 text-sm mb-1">ID: {id}</div>
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    )
}
