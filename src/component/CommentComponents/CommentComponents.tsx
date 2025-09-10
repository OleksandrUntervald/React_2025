import {CommentComponent} from "../CommentComponent/CommentComponent.tsx";
import {useEffect, useState} from "react";
import type {IComments} from "../../modules/IComments.ts";
import {LoadComments} from "../../services/api.service.ts";

export const CommentComponents = () => {

    const [comments, setComments] = useState<IComments[]>([]);
    useEffect(() => {
        LoadComments().then(values => setComments(values))
    }, [])
    return(
        <div className='bg-yellow-500'>
            {comments.map((comment, index) => <CommentComponent key={index} comment={comment}/>)}

        </div>
    )
}