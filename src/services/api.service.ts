
import type {IPostsDummyjson} from "../modules/IPostsDammyJSON.ts";
import type {IPost} from "../modules/IPosts.ts";


const endpointPosts = import.meta.env.VITE_API_BASE_URL + '/posts';


export const LoadPost = async (): Promise<IPost[]> => {
    const responsPostDammy: IPostsDummyjson = await fetch(endpointPosts)
        .then(valuePost  => valuePost.json());
    return responsPostDammy.posts
}

