// ProductsComponent.tsx
import {ProductComponent} from "../ProductComponent/ProductComponent.tsx";
import {useEffect, useState} from "react";
import {LoadProducts} from "../../services/api.service.ts";
import type {IProduct} from "../../modules/IProductsResponse.ts";

export const ProductsComponent = () => {
    const [products, setProducts] = useState<IProduct[]>([]);
    useEffect(() => {
        LoadProducts().then(values => setProducts(values))
    }, []);

    return (
        <div className="min-h-screen bg-green-100 py-10 px-4">
            <h1 className="text-2xl font-bold text-center text-green-800 mb-8">
                Список товарів
            </h1>
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
                {products.map((product, index) => (
                    <ProductComponent key={index} product={product}/>
                ))}
            </div>
        </div>
    )
}
