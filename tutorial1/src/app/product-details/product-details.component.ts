import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Product, products} from "../../products";
import {CartService} from "../cart.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  product: Product | undefined;
  products = products;

  ngOnInit(): void {
    const routeParam = this.route.snapshot.paramMap;
    const id = Number(routeParam.get('id'));
    this.product = this.products.find(x => x.id === id);
  }

  addProductToCart(product: Product) {
    this.cartService.addItem(product);
  }

}
