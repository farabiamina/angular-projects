import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Product} from "../../products";
import { NgForm } from "@angular/forms";
import {Model} from "../../products";


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

  // products: Product[] = [];
  newProduct = {
    id: Date.now(),
    image: "https://images-eu.ssl-images-amazon.com/images/I/71AvQd3VzqL._AC._SR360,460.jpg",
    name: "",
    description: "",
    price: 300,
    model: Model.apple,
  }

  addProduct(form: NgForm) {
    console.log(form);
    // let name = form.controls["name"].value;
    let pr:Product = {id: Date.now(), price: this.newProduct.price, description: this.newProduct.description, name: this.newProduct.name, image: this.newProduct.image, model: this.newProduct.model}
    this.add.emit(pr);
    // this.products.push({id: Date.now(), price: this.newProduct.price, description: this.newProduct.description, name: this.newProduct.name, image: this.newProduct.image});
  }

  onChange() {
    // this.name = e.target.value;
    console.log(this.newProduct.name);
  }

  models = Object.keys(Model);

}
