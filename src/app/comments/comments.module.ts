import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comments.component';
import { AddCommentModule } from '../add-comment/add-comment.module';



@NgModule({
  declarations: [CommentsComponent],
  imports: [
    CommonModule,
    AddCommentModule
  ],
  exports: [CommentsComponent]
})
export class CommentsModule { }
