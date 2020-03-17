import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Comment } from '../interface/comment';
import { User } from './../interface/user';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CommentsComponent implements OnInit {
  // all comments will be stored here
  comments: Comment[] = [];
  // variable for storing current dummy user
  currentUser: User;
  constructor() {
    // dummy user added in applicationCache.component
    this.currentUser = JSON.parse(localStorage.getItem('userInfo'));
  }
  ngOnInit(): void {
    // adding dummy comments by different users
    this.comments.push({
      comment: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s`,
      commentOwner: 'Zoe Brian',
      commentOwnerId: 2,
      likes: 4,
      likedByYou: false
    },
      {
        comment: `Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with 'real' content.`,
        commentOwner: 'Tracey Connor',
        commentOwnerId: 3,
        likes: 1,
        likedByYou: true
      });
  }
  newCommentAdded(newComment: Comment): void {
    // latest comment will be pushed in the last
    this.comments.push(newComment);
  }
  likeComment(index: number): void {
    // toggle like 
    this.comments[index].likedByYou = !this.comments[index].likedByYou;

    // incrementing/decrementing the like count
    if (this.comments[index].likedByYou) {
      this.comments[index].likes += 1;
    } else {
      this.comments[index].likes -= 1;
    }
  }
}
