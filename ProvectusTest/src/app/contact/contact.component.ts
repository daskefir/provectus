import { Component } from '@angular/core';
import { HttpService} from '../http.service';
import { ReactiveFormsModule, FormGroup , FormBuilder, FormControl, Validators} from '@angular/forms';
import {Contact} from '../contact';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [HttpService]
})
export class ContactComponent {
  contact: Contact=new Contact(); 
  receivedUser: Contact; // полученный пользователь
  done: boolean = false;
  constructor(private httpService: HttpService){}
  submit(contact: Contact){
      this.httpService.postData(contact)
              .subscribe(
                  (data: Contact) => {this.receivedUser=data; this.done=true;},
                  error => console.log(error)
              );
  }
}


// myReactiveForm: FormGroup;

// constructor(private fb: FormBuilder) {}
// ngOnInit(){
//   this.initForm();
// }

// onSubmit() {
//   const controls = this.myReactiveForm.controls;
//   if (this.myReactiveForm.invalid) {
//     Object.keys(controls).forEach(controlName => controls[controlName].markAsTouched());
//   return;
//   }
//   console.log(this.myReactiveForm.value);

// }

// isControlInvalid(controlName: string): boolean {
//   const control = this.myReactiveForm.controls[controlName];
// const result = control.invalid && control.touched;
// return result;
// }
// private initForm(){
//   this.myReactiveForm = this.fb.group({
//     name: ['',
//   [Validators.required,
//   Validators.pattern(/[А-я]/)
//   ]
// ],
//     email: ['',
//   [
// Validators.required,
// Validators.email
//   ]],
//   comment: ['', [Validators.required, Validators.minLength(8)]],
// });
// }