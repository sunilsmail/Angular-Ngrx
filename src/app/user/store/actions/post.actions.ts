import { Action } from '@ngrx/store';
import { IPost } from '../model/Ipost';

export enum EPostActions {
    GetPosts = "[Post] get all posts",
    GetPostsSuccess = "[Post] get all posts Success",
    GetPostsFailed = "[Post] get all posts Failed",
    GetPost = "[Post] get all posts",
    GetPostSuccess = "[Post] get post success",
    GetPostFailed = "[Post] get post Failed",
}

export class GetPosts implements Action {
    public readonly type = EPostActions.GetPost;
}

export class GetPostsSuccess implements Action {
    public readonly type = EPostActions.GetPostsSuccess;
    constructor(public payload: IPost[]) { }
}

export class GetPostsFailed implements Action {
    public readonly type = EPostActions.GetPostsFailed;
    constructor(public payload: string) { }
}

export class GetPost implements Action {
    public readonly type = EPostActions.GetPost;
    constructor(public payload: number) { }
}

export class GetPostSuccess implements Action {
    public readonly type = EPostActions.GetPostSuccess;
    constructor(public payload: IPost) { }
}

export class GetPostFailed implements Action {
    public readonly type = EPostActions.GetPostFailed;
    constructor(public payload: string) { }
}

export type PostActions = GetPosts | GetPostsSuccess | GetPostsFailed | GetPost | GetPostSuccess | GetPostFailed;