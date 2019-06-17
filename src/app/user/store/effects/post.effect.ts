import { Injectable } from "@angular/core";
import { Effect, ofType, Actions } from '@ngrx/effects';
import { Store, select } from '@ngrx/store';
import { of } from 'rxjs';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { PostService } from '../service/postService';
import { IAppState } from '../state/app.state';
import { GetPostsSuccess, GetPostSuccess, GetPosts, EPostActions, GetPost } from '../actions/post.actions';
import { IPost } from '../model/Ipost';
import { selectedPostsList } from '../selectors/post.selector';




@Injectable()
export class PostEffect {
    constructor(
        private _postSvc: PostService,
        private _action$: Actions,
        private _Store: Store<IAppState>
    ) { }


    @Effect()
    getposts$ = this._action$.pipe(
        ofType<GetPosts>(EPostActions.GetPosts),
        switchMap(() => this._postSvc.getPosts()),
        switchMap((postHttp: IPost[]) =>
            of(new GetPostsSuccess(postHttp))
        )
    )

    @Effect()
    getpost$ = this._action$.pipe(
        ofType<GetPost>(EPostActions.GetPost),
        map(action => action.payload),
        withLatestFrom(this._Store.pipe(select(selectedPostsList))),
        switchMap(([id, posts]) => {
            if (posts && posts.length > 0) {
                const selectedPost = posts.filter(post => post.id === + id)[0];
                return of(new GetPostSuccess(selectedPost))
            } else {
                return of(new GetPostSuccess(null));
            }
        })

    )
}