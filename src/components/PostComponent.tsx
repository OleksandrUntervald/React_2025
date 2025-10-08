import type {FC} from "react";
import type {IPost} from "../models/IPosts.ts";

type PostPropsType = {
    post: IPost;
}
export const PostComponent: FC<PostPropsType> = ({post}) => {
    return (
        <div>
            asdasd
            {
                 post.title
            }
        </div>
    )
}