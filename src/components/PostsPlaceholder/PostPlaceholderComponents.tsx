import type {IPostsPlaceholder} from "../../modules/IPostsPlaceholder.ts";
import type {FC} from "react";

type PostPlaceholderProps = {
    valuePostPlaceholder: IPostsPlaceholder
}


export const PostPlaceholderComponents: FC<PostPlaceholderProps> = ({valuePostPlaceholder}) => {
    return (
        <div>
            {valuePostPlaceholder.title}
        </div>
    )
}