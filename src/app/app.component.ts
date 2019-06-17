import { Component } from '@angular/core';
import { IAppState } from './user/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { selectselectedPost, selectedPostsList } from './user/store/selectors/post.selector';
import { GetPost, GetPosts } from './user/store/actions/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrxSamples';
  constructor(private _store: Store<IAppState>) {}

  posts$ = this._store.pipe(select(selectedPostsList));

  ngOnInit(): void {
    this._store.dispatch(new GetPosts())
  }


}
