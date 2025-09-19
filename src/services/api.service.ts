import type {IProduct, IProductsResponse} from "../modules/IProductsResponse.ts";


const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/products';


export const LoadProducts = async (): Promise<IProduct[]> => {
    const responsPostDammy: IProductsResponse = await fetch(endpointPosts)
        .then(valuePost  => valuePost.json());
    return responsPostDammy.products
}

