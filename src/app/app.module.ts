import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";


import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import {HttpClientModule} from "@angular/common/http";
import {PostService} from "./services/post.service";
import { PostSaveComponent } from './post-save/post-save.component';
import { ButtonComponent } from './bootstrap/button/button.component';

const appRoutes: Routes = [

    { path: '', pathMatch: 'full', component: PostListComponent},
    { path: 'posts', component: PostListComponent },
    { path: 'posts/create', component: PostSaveComponent}

];

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostSaveComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule,
      RouterModule.forRoot(appRoutes),
      HttpClientModule
  ],
  providers: [PostService],
  bootstrap: [AppComponent]
})

export class AppModule { }
