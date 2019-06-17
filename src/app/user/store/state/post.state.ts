import { IPost } from '../model/Ipost';


export interface IpostState {
    posts?: IPost[];
    selectedPost?: IPost;
}

export const initialPostState: IpostState = {
    posts: null,
    selectedPost: null
}