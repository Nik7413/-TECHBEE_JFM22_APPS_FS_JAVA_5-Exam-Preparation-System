import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from '../registration.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private shared: SharedService, private registrationservice: RegistrationService, private router: Router) { }

  ngOnInit(): void {
    if (!this.registrationservice.session) {
      this.router.navigate(['/registration'])
    }
  }

  physhowCourse: boolean = this.shared.physhowCourse;
  cheshowCourse: boolean = this.shared.cheshowCourse;
  mathshowCourse: boolean = this.shared.mathshowCourse;
  javashowCourse: boolean = this.shared.javashowCourse;
  jsshowCourse: boolean = this.shared.jsshowCourse;
  htmlshowCourse: boolean = this.shared.htmlshowCourse;
  cssshowCourse: boolean = this.shared.cssshowCourse;

}
