import { Injectable } from '@angular/core';
import {Product} from "../products";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private client: HttpClient) { }
  items: Product[] = [];

  getItems(): Product[] {
    return this.items;
  }

  addItem(item: Product) {
    this.items.push(item);
  }

  clearCart() {
    this.items = [];
  }

  getShipping() {
    return this.client.get<{type: string, price: number}[]>('/assets/shipping.json');
  }
}
