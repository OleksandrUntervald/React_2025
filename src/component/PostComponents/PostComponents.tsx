import {PostComponent} from "../PostComponent/PostComponent.tsx";
import {useEffect, useState} from "react";
import {LoadPost} from "../../services/api.service.ts";
import type {IPost} from "../../modules/IPosts.ts";


export const PostComponents = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    useEffect(() => {
        LoadPost().then(values => setPosts(values))
    }, []);

    return (
        <div>
            {posts.map((post, index) => <PostComponent key={index} post={post}/> )}

        </div>
    )
}