import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {
  title = 'Project';
  show: boolean = false;
  uloggedIn: boolean = false;
  constructor(private registrationservice: RegistrationService, private router: Router) { }


  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 100);


  }

  logout() {
    this.registrationservice.session = false;
  }

  hamburger() {
    // tabs
    var leftpannel = document.getElementById("leftpannel") as HTMLBodyElement;
    var dashboard = document.getElementById("dashboard") as HTMLBodyElement;
    var courses = document.getElementById("courses") as HTMLBodyElement;
    var assesment = document.getElementById("assesment") as HTMLBodyElement;
    var settings = document.getElementById("settings") as HTMLBodyElement;
    var mode = document.getElementById("mode") as HTMLBodyElement;
    // logo
    var logodashboard = document.getElementById("logodashboard") as HTMLBodyElement;
    var logocourses = document.getElementById("logocourses") as HTMLBodyElement;
    var logoassesment = document.getElementById("logoassesment") as HTMLBodyElement;
    var logosettings = document.getElementById("logosettings") as HTMLBodyElement;
    var logomode = document.getElementById("logomode") as HTMLBodyElement;
    //banner middlepannel downpannel
    var banner = document.getElementById("banner") as HTMLBodyElement;
    var middlepannel = document.getElementById("middlepannel") as HTMLBodyElement;
    var downpannel = document.getElementById("downpannel") as HTMLBodyElement;
    //image
    var image = document.getElementById("profile") as HTMLBodyElement;
    if (leftpannel.style.width != "20%") {
      //tabs
      leftpannel.style.width = "20%";
      dashboard.style.display = "block";
      courses.style.display = "block";
      assesment.style.display = "block";
      settings.style.display = "block";
      mode.style.display = "block";
      //image
      image.style.height = "70px";
      image.style.width = "70px";
      image.style.left = "35%";
      //logo
      logodashboard.style.display = "none";
      logocourses.style.display = "none";
      logoassesment.style.display = "none";
      logosettings.style.display = "none";
      logomode.style.display = "none";
      //banner middlepannel downpannel
      banner.style.width = "80%";
      banner.style.left = "20%";
      middlepannel.style.width = "75%";
      middlepannel.style.left = "20%";
      downpannel.style.width = "75%";
      downpannel.style.left = "20%";

    } else {
      //tabs
      leftpannel.style.width = "5%";
      dashboard.style.display = "none";
      courses.style.display = "none";
      assesment.style.display = "none";
      settings.style.display = "none";
      mode.style.display = "none";
      //image
      image.style.height = "50px";
      image.style.width = "50px";
      image.style.left = "10%";

      //logo
      logodashboard.style.display = "block";
      logocourses.style.display = "block";
      logoassesment.style.display = "block";
      logosettings.style.display = "block";
      logomode.style.display = "block";
      //banner middlepannel downpannel
      banner.style.width = "95%";
      banner.style.left = "5%";
      middlepannel.style.width = "85%";
      middlepannel.style.left = "5%";
      downpannel.style.width = "90%";
      downpannel.style.left = "5%";
    }

  }

}
