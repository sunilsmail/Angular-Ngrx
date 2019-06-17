import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { IAppState } from '../state/app.state';
import { Postreducer } from './post.reducer';

export const appReducer: ActionReducerMap<IAppState, any> = {
    router: routerReducer,
    posts: Postreducer
}
