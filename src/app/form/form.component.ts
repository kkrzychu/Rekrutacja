import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  myForm!: FormGroup;
  selectOptions = [
    "Polska",
    "Niemcy",
    "Czechy",
    "Francja",
    "Szwecja",
    "Rosja",
    "Ukraina",
    "Włochy"
  ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {


    this.myForm = this.fb.group({
      name: new FormControl('', Validators.required),
      surname: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      userDescription: new FormControl('', Validators.required),
      country: new FormControl('Polska', Validators.required),
      sex: new FormControl('', Validators.required),
      check: this.fb.group({
        procData: new FormControl('', Validators.required),
        Accept: new FormControl('', Validators.required)
    })
    })
    // this.myForm.valueChanges.subscribe(console.log)
  }

  showLog() {
    console.log(this.myForm.value);
  }

  get name() {
    return this.myForm.get('name');
  }

  get surname() {
    return this.myForm.get('surname');
  }
  get email() {
    return this.myForm.get('email');
  }

  get password() {
    return this.myForm.get('password');
  }

  get userDescription() {
    return this.myForm.get('userDescription');
  }

  get country() {
    return this.myForm.get('country');
  }

  get sex() {
    return this.myForm.get('sex');
  }

  get check() {
    return this.myForm.get('check');
  }
}
