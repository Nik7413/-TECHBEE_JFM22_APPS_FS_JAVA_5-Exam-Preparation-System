import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-assesment',
  templateUrl: './assesment.component.html',
  styleUrls: ['./assesment.component.css']
})
export class AssesmentComponent implements OnInit {

  constructor(private shared: SharedService, private registrationservice: RegistrationService, private router: Router) { }


  ngOnInit(): void {
    if (!this.registrationservice.session) {
      this.router.navigate(['/registration'])
    }
  }

  physics() {
    this.shared.physhow = true;
    this.shared.cheshow = false;
    this.shared.mathshow = false;
    this.shared.javashow = false;
    this.shared.jsshow = false;
    this.shared.htmlshow = false;
    this.shared.cssshow = false;
    if (this.shared.p == 0) {
      this.registrationservice.score = this.registrationservice.score + 14.28;
      this.shared.p = this.shared.p + 1;
    }
  }
  chemistry() {
    this.shared.physhow = false;
    this.shared.cheshow = true;
    this.shared.mathshow = false;
    this.shared.javashow = false;
    this.shared.jsshow = false;
    this.shared.htmlshow = false;
    this.shared.cssshow = false;
    if (this.shared.c == 0) {
      this.registrationservice.score = this.registrationservice.score + 14.28;
      this.shared.c = this.shared.c + 1;
    }

  }
  maths() {
    this.shared.physhow = false;
    this.shared.cheshow = false;
    this.shared.mathshow = true;
    this.shared.javashow = false;
    this.shared.jsshow = false;
    this.shared.htmlshow = false;
    this.shared.cssshow = false;

    if (this.shared.m < 1) {
      this.registrationservice.score = this.registrationservice.score + 14.28;
      this.shared.m = this.shared.m + 1;
    }

  }
  java() {
    this.shared.physhow = false;
    this.shared.cheshow = false;
    this.shared.mathshow = false;
    this.shared.javashow = true;
    this.shared.jsshow = false;
    this.shared.htmlshow = false;
    this.shared.cssshow = false;

    if (this.shared.j < 1) {
      this.registrationservice.score = this.registrationservice.score + 14.28;
      this.shared.j = this.shared.j + 1;
    }
  }
  javascript() {
    this.shared.physhow = false;
    this.shared.cheshow = false;
    this.shared.mathshow = false;
    this.shared.javashow = false;
    this.shared.jsshow = true;
    this.shared.htmlshow = false;
    this.shared.cssshow = false;
    if (this.shared.js < 1) {
      this.registrationservice.score = this.registrationservice.score + 14.28;
      this.shared.js = this.shared.js + 1;
    }

  }
  html() {
    this.shared.physhow = false;
    this.shared.cheshow = false;
    this.shared.mathshow = false;
    this.shared.javashow = false;
    this.shared.jsshow = false;
    this.shared.htmlshow = true;
    this.shared.cssshow = false;
    if (this.shared.h < 1) {
      this.registrationservice.score = this.registrationservice.score + 14.28;
      this.shared.js = this.shared.js + 1;
    }

  }
  css() {
    this.shared.physhow = false;
    this.shared.cheshow = false;
    this.shared.mathshow = false;
    this.shared.javashow = false;
    this.shared.jsshow = false;
    this.shared.htmlshow = false;
    this.shared.cssshow = true;
    if (this.shared.cs < 1) {
      this.registrationservice.score = this.registrationservice.score + 14.28;
      this.shared.cs = this.shared.cs + 1;
    }

  }
}
