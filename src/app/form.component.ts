import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  @Input() name: string;
}
