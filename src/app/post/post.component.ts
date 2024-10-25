import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  @Input() postInput ?: Post          // receiveing data of type Post
  @Input() index : number =0

  constructor(private postService : PostService,private router : Router) {

  }
  ngOnInit(): void {
      console.log(this.postInput)  // to verify
  }
  deletePostBtn(){
    // console.log("delete button is called")
    this.postService.deletePost(this.index)
    // console.log(this.index)
  }

  editPostBtn(){
    this.router.navigate(['/post-edit',this.index])
  }

  updatePostLikes() {
    this.postService.updateLikes(this.index)
  }
}
