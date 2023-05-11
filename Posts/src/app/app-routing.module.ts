import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListComponent} from "./post-list/post-list.component";
import {PostComponent} from "./post/post.component";
import {HomeComponent} from "./home/home.component";
import {AboutComponent} from "./about/about.component";
import {PhotoComponent} from "./photo/photo.component";

const postsRoutes: Routes = [
  {path: "comments", component: PhotoComponent}
]

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "posts", component: PostListComponent},
  {path: "posts/:id", component: PostComponent},
  {path: "posts/:id", component: PostComponent, children: postsRoutes},
  {path: "home", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "**", redirectTo: "posts", pathMatch: "full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
