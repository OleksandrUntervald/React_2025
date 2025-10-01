import type {ICommentsPlaceholder} from "../../modules/ICommentsPlaceholder.ts";
import type {FC} from "react";

type CommentPlaceholderProps = {
    valueCommentsPlaceholder: ICommentsPlaceholder;
}

export const CommentPlaceholderComponents:FC<CommentPlaceholderProps> = ({valueCommentsPlaceholder}) => {
    return (
        <div>
            {valueCommentsPlaceholder.id} {valueCommentsPlaceholder.name}
        </div>
    )
}