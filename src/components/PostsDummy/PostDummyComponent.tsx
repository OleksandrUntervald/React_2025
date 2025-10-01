import type {IDummyPost} from "../../modules/IPostsDummy.ts";
import type {FC} from "react";

type PostDummyProp = {
    postDummy: IDummyPost
}

export const PostDummyComponent: FC<PostDummyProp> = ({postDummy}) => {
    return (
        <div>
            {postDummy.body}
        </div>
    )
}