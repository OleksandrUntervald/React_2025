import {useEffect, useState} from "react";
import {postDummyService} from "../../services/api.service.ts";
import type {IDummyPost, IPostsDummy} from "../../modules/IPostsDummy.ts";
import {PostDummyComponent} from "./PostDummyComponent.tsx";

export const PostsDummyComponents = () => {
    const [postDummy, setPostDummy] = useState<IDummyPost[]>([])

    useEffect(() => {
        postDummyService.getPostsDummy()
            .then(({posts}: IPostsDummy) =>
                setPostDummy(posts)
            )}, [])
    return (
        <div>
            {postDummy.map((postDummy, index) =>
                <PostDummyComponent key={index} postDummy={postDummy}/>
            )}
        </div>
    )
}