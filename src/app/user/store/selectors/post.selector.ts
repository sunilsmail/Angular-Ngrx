import { createSelector } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import { IpostState as IPostState } from '../state/post.state';

const selectPosts = (state: IAppState) => state.posts;


export const selectedPostsList = createSelector(
    selectPosts,
    (state: IPostState) => state.posts
);


export const selectselectedPost = createSelector(
    selectPosts,
    (state: IPostState) => state.selectedPost
)