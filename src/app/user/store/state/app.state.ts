import { RouterReducerState } from '@ngrx/router-store';
import { IpostState, initialPostState } from './post.state';


export interface IAppState {
    router?: RouterReducerState;
    posts: IpostState
}

export const initialAppState: IAppState = {
    posts: initialPostState
}

export function getInitialState(): IAppState {
    return initialAppState;
}