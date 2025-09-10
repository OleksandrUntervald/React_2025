import type {IComments} from "../../modules/IComments.ts";
import type {FC} from "react";


type PropsCommentType = {
    comment: IComments;
}
export const CommentComponent: FC<PropsCommentType> = ({comment: {id, body}}) => {

    return (
        <div>
            {id}{body}
        </div>
    )
}