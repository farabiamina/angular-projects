import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PostComponent } from './post/post.component';
import { PostListComponent } from './post-list/post-list.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PhotoComponent } from './photo/photo.component';
import {FormatPipe} from "./format.pipe";
import {ReversePipe} from "./reverse.pipe";

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    PostListComponent,
    HomeComponent,
    AboutComponent,
    PhotoComponent,
    FormatPipe,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
