import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') submittedForm: NgForm;
  questionAnswer: string;
  genders: string[] = ['male', 'female']
  isSubmitted = false;
  user= {
    username: '',
    email: '',
    secretQuestion: '',
    gender: ''
  }

  onSubmit() {
    this.isSubmitted=true;
    this.user.username = this.submittedForm.value.userData.username;
    this.user.email = this.submittedForm.value.userData.email;
    this.user.secretQuestion = this.submittedForm.value.secret;
    this.user.gender = this.submittedForm.value.gender;
    this.submittedForm.reset();
  }

  fillPartial() {
    const suggestedName = 'Superuser';
    // this.submittedForm.form.patchValue({
    //   userData: {
    //     username: suggestedName
    //   }
    // });
    this.submittedForm.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      questionAnswer: '',
      secret: 'teacher',
      gender: 'male'
    })
  }
}
