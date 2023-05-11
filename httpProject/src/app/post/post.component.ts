import { Component, OnInit } from '@angular/core';
import {Post} from "../models";
import {PostService} from "../post.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  post: Post | undefined;
  loaded: boolean | undefined;
  // photos: Photo[] | undefined;

  constructor(private route: ActivatedRoute,
              private postService: PostService) {
    // this.photos = [];
  }


  ngOnInit(): void {
    this.getAlbum();
  }
  getAlbum() {
    this.route.paramMap.subscribe((params) => {
      const routeParams = this.route.snapshot.paramMap;
      const productIdFromRoute = Number(routeParams.get('productId'));
      this.loaded = false;
      this.postService.getPost(productIdFromRoute).subscribe((post) => {
        this.post = post;
        this.loaded = true;
      });
    });
  }

  updatePost() {
    this.loaded = false;
    this.postService.updatePost(this.post as Post).subscribe((post) => {
      console.log(post);
      this.loaded = true;
    });
  }

  // goBack() {
  //   this.location.back();
  // }

}
