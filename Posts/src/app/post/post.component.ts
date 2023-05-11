import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../post.service";
import {Post} from "../models";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit(): void {
    this.getPost();
  }

  loaded: boolean | undefined;
  post: Post | undefined;
  title: string | undefined;
  private querySubscription: Subscription | undefined;
  // private routeSubscription: Subscription | undefined;
  price: number = 0;

  getPost() {
    this.route.paramMap.subscribe((param) => {
      const routeParams = this.route.snapshot.paramMap;
      const id = Number(routeParams.get("id"));
      this.loaded = false;
      this.service.getPost(id).subscribe((post) => {
        this.post = post;
        this.loaded = true;
      })
    });
    // this.routeSubscription = this.route.params.subscribe(
    //   param=>this.post?.id = params['id'];
    // )
    this.querySubscription = this.route.queryParams.subscribe(
      (query: any) => {
        if (this.post) {
          this.price = query['[price]'];
          // console.log(query['title']);
        }
      }
    )
  }

  updatePost() {
    this.loaded = false;
    this.service.updatePost(this.post as Post).subscribe((post) => {
      console.log(post);
      this.loaded = true;
    });
  }

}
