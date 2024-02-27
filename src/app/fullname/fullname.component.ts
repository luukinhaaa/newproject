import { Component } from '@angular/core';

@Component({
  selector: 'app-fullname',
  templateUrl: './fullname.component.html',
  styleUrl: './fullname.component.css'
})
export class FullnameComponent {
  num1: number = 44;
  num2: number = 0;
  sum: number = 0;
calc(){
this.sum = this.num1 + this.num2;

}
}
