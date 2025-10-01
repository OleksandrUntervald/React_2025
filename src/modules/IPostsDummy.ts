export interface IDummyReaction {
    likes: number;
    dislikes: number;
}

export interface IDummyPost {
    id: number;
    title: string;
    body: string;
    tags: string[];
    reactions: IDummyReaction;
    views: number;
    userId: number;
}

export interface IPostsDummy{
    posts: IDummyPost[];
    total: number;
    skip: number;
    limit: number;
}
