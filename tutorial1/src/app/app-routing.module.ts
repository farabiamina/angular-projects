import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {PipeComponent} from "./pipe/pipe.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductItemComponent} from "./product-item/product-item.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";
import {CartComponent} from "./cart/cart.component";


const routes: Routes = [
  {path: "", component: AppComponent},
  {path: "pipe", component: PipeComponent},
  {path: "product-list", component: ProductListComponent},
  {path: "product-list/:id", component: ProductDetailsComponent},
  {path: "cart", component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
