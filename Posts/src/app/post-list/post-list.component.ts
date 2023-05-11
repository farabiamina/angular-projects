import { Component, OnInit } from '@angular/core';
import {PostService} from "../post.service";
import {Post} from "../models";
import {PostComponent} from "../post/post.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  constructor(private service: PostService, private router: Router) { }

  posts: Post[] | undefined;
  loaded: boolean | undefined;
  newPost: string | undefined;

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.loaded = false;
    this.service.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.loaded = true;
    },
      (err => {
        console.log(err);
        console.log(err.status);
      })
    );
  }

  addPost() {
    const post = {id:Date.now(), title: this.newPost};
    console.log(post);
    this.loaded = false;
    this.service.addPost(post as Post).subscribe((post) => {
      this.posts?.unshift(post);
      this.newPost = "";
      this.loaded = true;
    })
  }

  deletePost(id: number) {
    this.posts = this.posts?.filter(x => x.id !== id);
    this.service.deletePost(id).subscribe(() => {
      console.log("Post deleted", id);
    });
  }

  // checkStatus() {
  //   this.service.checkStatus();
  // }

  goHome() {
    this.router.navigate(['home']);
  }

}
