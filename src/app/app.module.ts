import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AddCommentModule } from './add-comment/add-comment.module';
import { CommentsModule } from './comments/comments.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AddCommentModule,
    CommentsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
