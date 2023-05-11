import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PostListComponent} from "./post-list/post-list.component";
import {PostComponent} from "./post/post.component";

const routes: Routes = [
  // {path: "**", component: PostListComponent},
  {path: 'posts', component: PostListComponent},
  {path: 'posts/:id', component: PostComponent},
  // {path: "", redirectTo: "posts", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
