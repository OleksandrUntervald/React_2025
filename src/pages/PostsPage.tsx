import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {postService} from "../services/api.service.ts";
import type {IPost} from "../modules/IPosts.ts";

export const PostsPage = () => {
     const [posts, setPosts] = useState<IPost[]>([])
     const {userId} = useParams()
      useEffect(() => {
        if (userId){
            postService
                .getAllPostsOfUserById(+userId)
                .then(value => setPosts(value))
        }
    }, [userId]);
    return (
        <div>
            {
                posts.map(value => <div>{value.title}</div>)
            }
        </div>
    )
}
