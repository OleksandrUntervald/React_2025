import {CommentDummyComponent} from "./CommentDummyComponent.tsx";
import {useEffect, useState} from "react";
import {commentsDummyService} from "../../services/api.service.ts";
import type {ICommentsDummy, IDummyComment} from "../../modules/ICommentsDummy.ts";

export const CommentsDummyComponent = () => {
    const [commentsDummy, setCommentsDummy ] = useState<IDummyComment[]>([]);
    useEffect(() => {
        commentsDummyService.getCommentsDummy()
            .then(({comments}: ICommentsDummy) =>
            {
                setCommentsDummy(comments)
            } )
    },[])

    return (
        <div>
            {commentsDummy.map(comment => <CommentDummyComponent key={comment.id} comment={comment} />)}

        </div>
    )
}