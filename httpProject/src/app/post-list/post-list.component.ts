import { Component, OnInit } from '@angular/core';
import {PostService} from "../post.service";
import {Post} from "../models";
import {PostComponent} from "../post/post.component";

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts: Post[] | undefined;
  loaded: boolean | undefined;
  newPost: string | undefined;
  errorMessage: String = "";

  constructor(private postService: PostService) {
  }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts() {
    this.loaded = false;
    this.errorMessage = "";
    this.postService.getPosts().subscribe((posts) => {
      this.posts = posts;
      this.loaded = true;
    },
      (error) => {                              //Error callback
        console.error('error caught in component');
        this.errorMessage = error;
        this.loaded = false;
    });
  }

  addPost() {
    const post = {
      title: this.newPost
    };
    this.loaded = false;
    this.postService.addPost(post as Post).subscribe((post) => {
      this.posts?.unshift(post);
      this.newPost = '';
      this.loaded = true;
    });
  }

  deletePost(id: number) {
    this.posts = this.posts?.filter((x) => x.id !== id);
    this.postService.deletePost(id).subscribe(() => {
      console.log('deleted', id);
    });
  }


}
