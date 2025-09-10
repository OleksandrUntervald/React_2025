import type {IPost} from "../../modules/IPosts.ts";
import type {FC} from "react";

type PostPropsType = {
    post: IPost
}

export const PostComponent: FC<PostPropsType> = ({post}) => {
    return (
        <div>
            {post.id} {post.userId}{post.title}{post.body}

        </div>
    )
}