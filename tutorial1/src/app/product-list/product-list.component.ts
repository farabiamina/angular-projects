import { Component, OnInit } from '@angular/core';
import {products, Product} from "../../products";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})

export class ProductListComponent {
  products = products;


  onProductRemove(id: number) {
    this.products = this.products.filter(x => x.id !== id);
  }

  onNotify() {
    window.alert("Notified");
  }

  addProduct(pr:Product) {
    this.products.push(pr);
  }

}
