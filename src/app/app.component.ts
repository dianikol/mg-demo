import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Response } from '@angular/http';

declare var jQuery;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  genders = ['male', 'female'];
  signUpForm: FormGroup;
  reorder = true;
  order = [];
  token: string = '';
  @ViewChild('table') table;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const sessionCookie = document.cookie.replace(/(?:(?:^|.*;\s*)xpr-token-backend\s*\=\s*([^;]*).*$)|^.*$/, "$1");
    if ( sessionCookie ) {
      const sessionData = JSON.parse(atob(sessionCookie.split('.')[1]));//the data portion of the cookie
      this.token = sessionData['xsrf'];
    }

    this.signUpForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl('sakis@backbone.gr', Validators.required),
        'email': new FormControl('Maecohk1', [
          Validators.email,
          Validators.required
        ]),
      }),
      'gender': new FormControl('male'),
      'names': new FormArray([
        this.initHobbies(),
        this.initHobbies(),
        this.initHobbies(),
        this.initHobbies(),
        this.initHobbies(),
        this.initHobbies(),
        this.initHobbies(),
        this.initHobbies()]),
    });
  }

  onReorder(event) {
    this.reorder = event.reorder;
  }

  onSubmit(form) {
    const formData = new FormData();
    console.log(this.signUpForm.get('userData.username').value)
    formData.append('string', JSON.stringify(this.signUpForm.value));

    return this.http
      .post("/api/auth/admin/login", {
        UserLogin: this.signUpForm.get('userData.username').value,
        UserPassword: this.signUpForm.get('userData.email').value
      }, {
        observe: 'response'}).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => { console.log(err) },
      );
  }

  initHobbies() {
    //return new FormControl();
    return new FormGroup({
      'fname': new FormControl(),
      'lname': new FormControl(),
      'descr': new FormControl(),
    });
  }

  image(file) {

    // Create a new FormData object.
    var formData = new FormData(file);

    return this.http
      .post("api/files/", formData).subscribe(
        (data) => {
          console.log(data);
        },
        (err) => { console.log(err) },
      );
  }

  onAddHobby() {
    // return this.http
    //   .post("/api/auth/admin/login", JSON.stringify({
    //     action: 'login',
    //     UserLogin: 'sakis@backbone.gr',
    //     UserPassword: 'Maecohk1'
    //   }),).subscribe(
    //     (data: Response) => { console.log(data.headers) },
    //     (err) => { console.log(err) },
    //   );
    this.allNames.push(this.initHobbies());


    //this.allNames.controls = this.allNames.value.reverse();

    console.log(this.allNames);
    setTimeout(() => {
      //jQuery(this.table.nativeElement).tableDnDUpdate();
    }, 100);

  }

  removeMe(i) {
    // console.log(i);
    // const control = <FormArray>this.signUpForm.controls['names'];
    // control = new FormArray([]);
    // control.removeAt(i);

    while (0 !== this.allNames.length) {
      this.allNames.removeAt(0);
    }
  }

  get allNames() {
    return (this.signUpForm.get('names') as FormArray);
  }
}
