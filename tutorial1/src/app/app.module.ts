import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemComponent } from './product-item/product-item.component';
import {HeaderModule} from "./header/header.module";
import { PipeComponent } from './pipe/pipe.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductReactiveFormComponent } from './product-reactive-form/product-reactive-form.component';
import { HighlightDirective } from './highlight.directive';
import { FocusDirective } from './focus.directive';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductItemComponent,
    PipeComponent,
    ProductFormComponent,
    ProductReactiveFormComponent,
    HighlightDirective,
    FocusDirective,
    ProductDetailsComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
