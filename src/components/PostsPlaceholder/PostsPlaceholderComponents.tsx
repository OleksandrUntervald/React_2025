import {useEffect, useState} from "react";
import {postPlaceholderService} from "../../services/api.service.ts";
import type {IPostsPlaceholder} from "../../modules/IPostsPlaceholder.ts";
import {PostPlaceholderComponents} from "./PostPlaceholderComponents.tsx";

export const PostsPlaceholderComponents = () => {
     const [postsPlaceholder, setPostPlaceholder] = useState<IPostsPlaceholder[]>([]);
     useEffect(() => {
         postPlaceholderService.getPostsPlaceholder()
             .then(allPostsPlaceholder =>{
                 setPostPlaceholder(allPostsPlaceholder)
             })
     },  []);
    return (
        <div>
            {postsPlaceholder.map((value, key) =>
                <PostPlaceholderComponents key={key} valuePostPlaceholder={value}/> )}
        </div>
    )
}