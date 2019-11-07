import { Component, Input } from '@angular/core';

@Component({
  selector: 'my-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent  {
  @Input() name: string;

  onSubmit(heroForm) {
    let details = {
      city: heroForm.value.city,
      firstname: heroForm.value.firstname,
      lastname: heroForm.value.lastname,
      street: heroForm.value.street,
      zip: heroForm.value.zip,
    }
    console.log(details)
  }
}
