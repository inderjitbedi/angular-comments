import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';

import { Comment } from './../interface/comment';
import { User } from './../interface/user';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AddCommentComponent implements OnInit {
  // creating a reactive form
  addCommentForm = this.formBuilder.group({
    comment: ['', [Validators.required, Validators.maxLength(256)]],
  });

  // Eventemitter to let parent component know that a new comment is added
  @Output() commented = new EventEmitter<Comment>();

  // boolean  if the form is submitted or not 
  formSubmitted: boolean = false;

  // variable for storing current dummy user
  currentUser: User;
  constructor(private formBuilder: FormBuilder) {
    this.currentUser = JSON.parse(localStorage.getItem('userInfo'));
  }
  ngOnInit(): void {
  }

  // event emitter emits the comment of the type Comment if the form is valid
  postComment(): void {
    this.formSubmitted = true;
    if (this.addCommentForm.valid) {
      this.commented.emit({
        comment: this.addCommentForm.controls.comment.value,
        commentOwner: this.currentUser.fullName,
        commentOwnerId: this.currentUser.id
      });
      this.resetForm();
    }
  }

  // once the comment is added, we reset the form
  resetForm(): void {
    this.formSubmitted = false;
    this.addCommentForm.reset();
  }
}
