import { error } from '@angular/compiler/src/util';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { Student } from '../student';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  student: Student = new Student();
  message: string = '';
  name: String = "";
  email: String = "";
  mobile: Number = 0;
  password: String = "";
  state: Boolean = true;
  compare: String = "";
  checked: Boolean = false;
  @Output() logemit = new EventEmitter();
  @Input()
  loggedIn!: Boolean;
  log: Boolean = true;

  constructor(private registrationservice: RegistrationService, private router: Router) { }

  ngOnInit(): void {
  }

  loginstudent() {
    this.registrationservice.studentlogin(this.student).subscribe(data => {
      if (this.student.emailid != null && this.student.password != null) {

        alert("Login Success");
        this.registrationservice.session = true;
        this.router.navigate(['/dashboard']);
      }
      else {
        this.message = "Please fill the fields !"
      }
    }, error => this.message = "Invalid Login");

  }

  registerstudent() {
    this.registrationservice.studentregister(this.student).subscribe(data => {

      alert("Registration Success");
      return this.login();


    }, error => this.message = "User Already exist");
    return this.login();

  }



  register() {
    var x = document.getElementById("login") as HTMLBodyElement;
    var y = document.getElementById("register") as HTMLBodyElement;
    var z = document.getElementById("btn") as HTMLBodyElement;
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
  }

  login() {
    var x = document.getElementById("login") as HTMLBodyElement;
    var y = document.getElementById("register") as HTMLBodyElement;
    var z = document.getElementById("btn") as HTMLBodyElement;
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0";

  }
  compared() {
    if (this.checked == true) {
      if (this.student.password == this.compare && this.student.name != null && this.student.emailid != null && this.student.mobilenumber != null) {
        this.state = false;
      }
      else {
        this.state = true;
      }
    }
  }
  check() {
    var uppercase = /[A-Z]/g;
    var lowercase = /[a-z]/g;
    var specialchar = /[!-*,@]/g;
    var numbers = /[0-9]/g;
    if (this.student.password.match(uppercase) && this.student.password.match(lowercase) && this.student.password.match(numbers) && this.student.password.match(specialchar) && this.student.password.length >= 8) {
      this.checked = true;
    }
    else {
      alert("Password should contain: \n Uppercase\n Lowercase \n Special Character(!,@,#,$,%,^,&,*)\n Numbers(0-9)\n Minimun Length of password should be 8")
      this.checked = false;

    }

  }
}
