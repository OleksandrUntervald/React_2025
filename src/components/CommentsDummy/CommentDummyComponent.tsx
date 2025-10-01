import type {IDummyComment} from "../../modules/ICommentsDummy.ts";
import type {FC} from "react";

type CommentDummyPropsType = {
    comment: IDummyComment;
}
export const CommentDummyComponent: FC<CommentDummyPropsType> = ({comment}) => {
    return (
        <div>
            {comment.body}
        </div>
    )
}