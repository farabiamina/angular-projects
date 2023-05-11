import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent{

  myDate = new Date(2022, 3, 12);

  str = "Privet, Andrey";

  num = 3.5;

}
