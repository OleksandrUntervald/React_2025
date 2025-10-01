import {useEffect, useState} from "react";
import type {ICommentsPlaceholder} from "../../modules/ICommentsPlaceholder.ts";
import {commentsPlaceholderService} from "../../services/api.service.ts";
import {CommentPlaceholderComponents} from "./CommentPlaceholderComponent.tsx";

export const CommentsPlaceholderComponent = () => {
    const [commentsPlaceholder, setCommentsPlaceholder] = useState<ICommentsPlaceholder[]>([])
    useEffect(() => {
        commentsPlaceholderService.getCommentsPlaceholder()
            .then(allCommentsPlaceholders => {
                setCommentsPlaceholder(allCommentsPlaceholders)
            })
    }, [])
    return (
        <div>
            {commentsPlaceholder.map(valueCommentsPlaceholder => <CommentPlaceholderComponents key={valueCommentsPlaceholder.id} valueCommentsPlaceholder={valueCommentsPlaceholder}/>)}

        </div>
    )
}