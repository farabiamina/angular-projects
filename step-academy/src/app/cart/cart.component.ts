import { Component, OnInit } from '@angular/core';
import {CartService} from "../cart.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(private cartService: CartService, public shippingCosts:any) {
  }
  // : {price: number, type: string}[];
  // shippingCosts = this.cartService.getShippingPrices();
  ngOnInit(): void {
    this.cartService.getShippingPrices().subscribe((shipping) =>{
        this.shippingCosts = shipping;
      }
    )
  }
  items = this.cartService.getItems();

  // shippingCosts!: Observable<{ type: string, price: number }[]>;

}
