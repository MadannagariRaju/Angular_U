import { Injectable } from "@angular/core";
import { PostService } from "./post.service";
import { Post } from "./post.model";
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs";

@Injectable({providedIn:'root'})

export class BackEndService{
    constructor(private postService: PostService, private http: HttpClient) {

    }
    // Task 1  --> save data
    saveData() {
        const listOfPosts : Post[] = this.postService.getPostList();
        this.http.put('https://live-posts-208bf-default-rtdb.firebaseio.com/posts.json',listOfPosts).subscribe((res)=>{
            console.log(res)
        })
    }

    fetchData() {
        // step 1 get data 
        this.http.get<Post[]>('https://live-posts-208bf-default-rtdb.firebaseio.com/posts.json')
        .pipe(
            tap((post : Post[])=>{
                console.log(post)
                // step 2 - send to post.service
                this.postService.setPosts(post)
            })
        )
        .subscribe();
    }

}