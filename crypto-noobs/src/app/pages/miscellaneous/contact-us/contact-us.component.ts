import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from '../../../services/firestore.service';
import {UserContact} from '../models/user-contact';

@Component({
  selector: 'ngx-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent implements OnInit {
  myForm: FormGroup;
  userContactFormObject: UserContact;

  constructor(private fb: FormBuilder, private fs: FirestoreService) { }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      userName: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.status === 'VALID') {
      this.userContactFormObject = {
        userName: this.userName.value,
        firstName: this.firstName.value,
        lastName: this.lastName.value,
        email: this.email.value,
        message: this.message.value,
        subject: this.subject.value,
        isValid: true,
      };
      this.fs.add('contactMessages', this.userContactFormObject);
    }
  }
  get userName() {
    return this.myForm.get('userName');
  }
  get password() {
    return this.myForm.get('password');
  }
  get firstName() {
    return this.myForm.get('firstName');
  }
  get lastName() {
    return this.myForm.get('lastName');
  }
  get email() {
    return this.myForm.get('email');
  }
  get subject() {
    return this.myForm.get('subject');
  }
  get message() {
    return this.myForm.get('message');
  }
  }
