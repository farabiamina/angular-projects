import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Model, Product} from "../../products";
import {FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators, AbstractControl} from "@angular/forms";

@Component({
  selector: 'app-product-reactive-form',
  templateUrl: './product-reactive-form.component.html',
  styleUrls: ['./product-reactive-form.component.css']
})
export class ProductReactiveFormComponent implements OnInit {

  @Output() add = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  myForm: FormGroup = new FormGroup({
    "prName": new FormControl("phone", [Validators.required, this.myValidator]),
    "prPrice": new FormControl("300", [Validators.required, this.priceValidator(3)]),
    "prDesc": new FormControl("", [Validators.required]),
    "prModel": new FormControl(Model.samsung, [Validators.required]),
  });

  addProduct(form: FormGroup) {
    let name = form.controls["prName"].value;
    let price = form.controls["prPrice"].value;
    let desc = form.controls["prDesc"].value;
    let model = form.controls["prModel"].value;
    let image = "https://images-eu.ssl-images-amazon.com/images/I/71AvQd3VzqL._AC._SR360,460.jpg";
    this.add.emit({id: Date.now(), price: price, description: desc, name: name, image: image, model: model})
  }

  onChange() {
    // this.name = e.target.value;
  }

  models = Object.keys(Model);

  // myValidator(): ValidatorFn {
  //   return (control:AbstractControl) : ValidationErrors | null => {
  //     const value = control.value;
  //     if (value === "angular") {
  //       return {invalidName :true};
  //     }
  //     return null;
  //   }
  // }

  myValidator(control: FormControl): ValidationErrors | null {
    if (control.value === "angular") {
      return {invalidName : true};
    }
    return null;
  }

  priceValidator(num: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (+control.value % num !== 0) {
        return {priceInvalid: true};
      }
      return null;
    }
  }

}
