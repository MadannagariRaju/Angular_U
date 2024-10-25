import { Injectable } from "@angular/core";
import { PostService } from "./post.service";
import { Post } from "./post.model";

@Injectable({providedIn:'root'})
export class BackEndService{
    constructor(private postService: PostService) {

    }

    // Task 1  --> save data
    saveData() {
        const listOfPosts : Post[] = this.postService.getPostList();
    }

}