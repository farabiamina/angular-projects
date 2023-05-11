import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import {TaskModule} from "./task/task.module";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {RouterModule} from "@angular/router";
import { ProductItemComponent } from './product-item/product-item.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductReactiveFormComponent } from './product-reactive-form/product-reactive-form.component';
import { HighlightDirective } from './highlight.directive';
import { FocusDirective } from './focus.directive';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    ProductItemComponent,
    ProductFormComponent,
    ProductReactiveFormComponent,
    HighlightDirective,
    FocusDirective,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    TaskModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgSelectModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
