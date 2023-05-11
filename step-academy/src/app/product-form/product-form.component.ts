import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../products";
import { NgForm } from "@angular/forms";
import {Model} from "../products";

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})

export class ProductFormComponent implements OnInit {
  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  // name: string = "ddd";
  // price: number = 0;
  // description: string = "efrefrew";

  models = Object.values(Model);
  products: Product[] = [];
  newProduct = {
    id: Date.now(),
    image: "",
    name: "ddddd",
    description: "",
    price: 200,
    model: Model.xiomi,
  }

  addProduct(form: NgForm) {
    console.log(form.controls['name'].value);
    console.log(form.controls['description'].value);
    let pr:Product = {id: Date.now(), price: this.newProduct.price, description: this.newProduct.description, name: this.newProduct.name, image: this.newProduct.image, model: this.newProduct.model}
    this.add.emit(pr);

    // this.products.push({id: Date.now(), price: this.newProduct.price, description: this.newProduct.description, name: this.newProduct.name, image: this.newProduct.image});
  }

  onChange() {
    // this.name = e.target.value;
    console.log(this.newProduct.name);
  }
}
