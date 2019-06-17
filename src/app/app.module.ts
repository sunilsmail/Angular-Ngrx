import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { appReducer } from './user/store/reducers/appReducer';
import { EffectsModule } from '@ngrx/effects';
import { PostEffect } from './user/store/effects/post.effect';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { PostService } from './user/store/service/postService';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([PostEffect]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' })
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
