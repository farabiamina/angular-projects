import {Component, EventEmitter, OnInit} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validator,
  Validators,
  NgForm,
  ValidatorFn,
  AbstractControl,
  ValidationErrors
} from "@angular/forms";
import {Model, Product} from "../products";
import {Input, Output} from "@angular/core";

@Component({
  selector: 'app-product-reactive-form',
  templateUrl: './product-reactive-form.component.html',
  styleUrls: ['./product-reactive-form.component.css']
})
export class ProductReactiveFormComponent {
  @Output() add = new EventEmitter();

  myForm : FormGroup = new FormGroup({
    "prName": new FormControl("Phone", [Validators.required, this.prNameValidator]),
    "prPrice": new FormControl("200", [Validators.min(100), this.priceValidator(2)]),
    "prDesc": new FormControl(),
    "prModel": new FormControl(),
  });

  models = Object.values(Model);

  addProduct(form: FormGroup) {
    console.log(this.myForm);
    let name = form.controls['prName'].value;
    let desc = form.controls['prDesc'].value;
    let price = form.controls['prPrice'].value;
    let model = form.controls['prModel'].value;
    let pr:Product = {id: Date.now(), price, description: desc, name: name, image: "", model: model}
    this.add.emit(pr);
    [name, desc, price, model] = ["","",0, Model.samsung];
  }

  // валидатор
  prNameValidator(control: FormControl): ValidationErrors|null{

    if(control.value==="нет"){
      return {nameInvalid: true};
    }
    return null;
  }

  private priceValidator(num: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (+control.value % num !== 0) {
        return {notValidPrice: true};
      }
      return null;
    }
  }

}
