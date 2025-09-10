import type {IPost} from "./IPosts.ts";

export interface IPostsDummyjson{
    posts: IPost[],
    skip: number
    total: number,
    limit: number
}