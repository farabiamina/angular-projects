import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PostService} from "../post.service";
import {Comment} from "../models";

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {

  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit(): void {
    this.getComments();
  }

  comments: Comment[] | undefined;

  getComments() {
    this.route.paramMap.subscribe((param) => {
      const routeParams = this.route.parent?.snapshot.paramMap;
      // использовать parent
      const id = Number(routeParams?.get("id"));
      this.service.getPostComments(id).subscribe((comments) => {
        this.comments = comments;
        console.log(this.comments);
      })
    });
  }

}
