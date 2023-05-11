import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {Product} from "../products";
import {Input} from "@angular/core";

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product!: Product
  @Output() remove = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  share() {
    window.alert('Shared');
    // window.open(`https://t.me/share/url?url=${products}`);
  }

  removeProduct(id: number) {
    this.remove.emit(id);
  }
}
