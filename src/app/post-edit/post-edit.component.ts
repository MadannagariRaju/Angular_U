import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from '../post.service';
import { Post } from '../post.model';
import { ActivatedRoute, Params, RedirectCommand } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrl: './post-edit.component.css'
})
export class PostEditComponent implements OnInit{
  form !: FormGroup
  constructor(private postService : PostService,private router:Router,private route:ActivatedRoute){

  }
  editEnabled:boolean = false
  index:number =0
  ngOnInit(): void {

      let title=""
      let description = ""
      let imgPath = ""

      this.route.params.subscribe((params:Params) =>{
        if(params['index']) {
          this.index = params['index']
          const val = this.postService.getPost(this.index);
          title = val.title
          description = val.description
          imgPath = val.imagePath
          this.editEnabled = true
        }
      })  

      this.form = new FormGroup(
        {
          title: new FormControl(title,[Validators.required]),
          description : new FormControl(description,[Validators.required]),
          imgPath : new FormControl(imgPath,[Validators.required])
        }
      )
  }

  onSubmit() {
    console.log(this.form)
    console.log("onsubmit called ")

    const title = this.form.value.title
    const description = this.form.value.description
    const imgPath = this.form.value.imgPath

    const post = new Post(title,description,imgPath,'raju@gmail.com',new Date(),0)
    if(this.editEnabled) {
      this.postService.updatePost(this.index,post);
    }else{
      this.postService.addPost(post)
    }
    this.router.navigate(['/post-list']); 
    
    
  }
 


}
