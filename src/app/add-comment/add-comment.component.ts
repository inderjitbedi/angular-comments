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
  addCommentForm = this.formBuilder.group({
    comment: ['', [Validators.required, Validators.maxLength(256)]],
  });
  @Output() commented = new EventEmitter<Comment>();
  formSubmitted: boolean = false;
  currentUser: User;
  constructor(private formBuilder: FormBuilder) {
    this.currentUser = JSON.parse(localStorage.getItem('userInfo'));
  }
  ngOnInit(): void {
  }
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
  resetForm(): void {
    this.formSubmitted = false;
    this.addCommentForm.reset();
  }
}
