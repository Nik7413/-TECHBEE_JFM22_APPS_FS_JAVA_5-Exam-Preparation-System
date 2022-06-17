import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})

export class CoursesComponent implements OnInit {

  constructor(private registrationservice: RegistrationService, private router: Router, private shared: SharedService) { }

  ngOnInit(): void {
    if (!this.registrationservice.session) {
      this.router.navigate(['/registration'])
    }
  }

  physics() {
    this.shared.physhowCourse = true;
    this.shared.cheshowCourse = false;
    this.shared.mathshowCourse = false;
    this.shared.javashowCourse = false;
    this.shared.jsshowCourse = false;
    this.shared.htmlshowCourse = false;
    this.shared.cssshowCourse = false;
    if (this.shared.cp == 0) {
      this.registrationservice.cscore = this.registrationservice.cscore + 14.28;
      this.shared.cp = this.shared.cp + 1;
    }
  }
  chemistry() {
    this.shared.physhowCourse = false;
    this.shared.cheshowCourse = true;
    this.shared.mathshowCourse = false;
    this.shared.javashowCourse = false;
    this.shared.jsshowCourse = false;
    this.shared.htmlshowCourse = false;
    this.shared.cssshowCourse = false;
    if (this.shared.cc == 0) {
      this.registrationservice.cscore = this.registrationservice.cscore + 14.28;
      this.shared.cc = this.shared.cc + 1;
    }

  }
  maths() {
    this.shared.physhowCourse = false;
    this.shared.cheshowCourse = false;
    this.shared.mathshowCourse = true;
    this.shared.javashowCourse = false;
    this.shared.jsshowCourse = false;
    this.shared.htmlshowCourse = false;
    this.shared.cssshowCourse = false;
    if (this.shared.cm < 1) {
      this.registrationservice.cscore = this.registrationservice.cscore + 14.28;
      this.shared.cm = this.shared.cm + 1;
    }

  }
  java() {
    this.shared.physhowCourse = false;
    this.shared.cheshowCourse = false;
    this.shared.mathshowCourse = false;
    this.shared.javashowCourse = true;
    this.shared.jsshowCourse = false;
    this.shared.htmlshowCourse = false;
    this.shared.cssshowCourse = false;
    if (this.shared.cj < 1) {
      this.registrationservice.cscore = this.registrationservice.cscore + 14.28;
      this.shared.cj = this.shared.cj + 1;
    }
  }
  javascript() {
    this.shared.physhowCourse = false;
    this.shared.cheshowCourse = false;
    this.shared.mathshowCourse = false;
    this.shared.javashowCourse = false;
    this.shared.jsshowCourse = true;
    this.shared.htmlshowCourse = false;
    this.shared.cssshowCourse = false;
    if (this.shared.cjs < 1) {
      this.registrationservice.cscore = this.registrationservice.cscore + 14.28;
      this.shared.cjs = this.shared.cjs + 1;
    }

  }
  html() {
    this.shared.physhowCourse = false;
    this.shared.cheshowCourse = false;
    this.shared.mathshowCourse = false;
    this.shared.javashowCourse = false;
    this.shared.jsshowCourse = false;
    this.shared.htmlshowCourse = true;
    this.shared.cssshowCourse = false;
    if (this.shared.ch < 1) {
      this.registrationservice.cscore = this.registrationservice.cscore + 14.28;
      this.shared.cjs = this.shared.cjs + 1;
    }

  }
  css() {
    this.shared.physhowCourse = false;
    this.shared.cheshowCourse = false;
    this.shared.mathshowCourse = false;
    this.shared.javashowCourse = false;
    this.shared.jsshowCourse = false;
    this.shared.htmlshowCourse = false;
    this.shared.cssshowCourse = true;
    if (this.shared.ccs < 1) {
      this.registrationservice.cscore = this.registrationservice.cscore + 14.28;
      this.shared.ccs = this.shared.ccs + 1;
    }
  }

}
