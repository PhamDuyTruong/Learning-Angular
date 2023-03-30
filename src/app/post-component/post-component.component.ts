import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.services';

@Component({
  selector: 'app-post-component',
  templateUrl: './post-component.component.html',
  styleUrls: ['./post-component.component.css'],
  providers: [PostService]
})
export class PostComponentComponent implements OnInit {
   posts: Array<any>
  constructor(private postService: PostService){
      this.posts = postService.postList
  }

  ngOnInit(): void {

  }

  addNewPost(){
    let newPost = {
        id: 7,
        postTitle: "Post 7"
    };

    this.postService.addPost(newPost)
  }
}
