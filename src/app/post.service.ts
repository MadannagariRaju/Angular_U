import { Injectable } from "@angular/core";
import { Post } from "./post.model";

@Injectable({ providedIn: 'root' })
export class PostService {
    listOfPost: Post[] = [
        new Post(
            'Nature',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere esse quo nemo perferendis nesciunt placeat quam fugiat rem in architecto illum vero, cupiditate quos iste itaque unde, voluptatum veritatis culpa inventore excepturi? Mollitia accusamus quod sequi eum inventore architecto nobis.',
            'https://img.freepik.com/free-photo/photorealistic-tree-with-branches-trunk-outside-nature_23-2151478142.jpg?semt=ais_hybrid',
            'test@test.com',
            new Date(),
            3
        ),
        new Post(
            'Hampi',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere esse quo nemo perferendis nesciunt placeat quam fugiat rem in architecto illum vero, cupiditate quos iste itaque unde, voluptatum veritatis culpa inventore excepturi? Mollitia accusamus quod sequi eum inventore architecto nobis.',
            'https://beyonder.travel/wp-content/uploads/2020/05/Stone-Chariot-Vittala-Temple-Hampi.jpg',
            'test@test.com',
            new Date(),
            4
        ),
        new Post(
            'Araku',
            'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere esse quo nemo perferendis nesciunt placeat quam fugiat rem in architecto illum vero, cupiditate quos iste itaque unde, voluptatum veritatis culpa inventore excepturi? Mollitia accusamus quod sequi eum inventore architecto nobis.',
            'https://res.cloudinary.com/dyiffrkzh/image/upload/c_fill,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_700/v1693226801/bbj/pmyzkvldodrci6yoz4p8.jpg',
            'test@test.com',
            new Date(),
            6
        )
    ]

    // facility 1
    getPostList(){
        return this.listOfPost;
    }

    // facility 2

    deletePost(index: number){
        return this.listOfPost.splice(index,1)
    }

    // facility 3

    addPost(post: Post) {
        this.listOfPost.push(post)
    }

    // facility 4

    getPost(index: number) {
        return this.listOfPost[index]
    }

    // facility 5 

    updatePost(index:number, post:Post) {
        this.listOfPost[index]=post
    } 

    // facility 6

    updateLikes(index:number) {
        this.listOfPost[index].numberOfLikes += 1
    }
}