import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCommentComponent } from './add-comment.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [AddCommentComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [AddCommentComponent]
})
export class AddCommentModule { }
