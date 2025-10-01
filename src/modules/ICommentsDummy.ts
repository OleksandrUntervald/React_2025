export interface IDummyUserInComment {
    id: number;
    username: string;
    fullName: string;
}

export interface IDummyComment {
    id: number;
    body: string;
    postId: number;
    likes: number;
    user: IDummyUserInComment;
}

export interface ICommentsDummy {
    comments: IDummyComment[];
    total: number;
    skip: number;
    limit: number;
}
