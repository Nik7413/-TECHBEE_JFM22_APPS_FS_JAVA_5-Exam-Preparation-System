import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  physhow: boolean = false;
  cheshow: boolean = false;
  mathshow: boolean = false;
  javashow: boolean = false;
  jsshow: boolean = false;
  htmlshow: boolean = false;
  cssshow: boolean = false;


  physhowCourse: boolean = false;
  cheshowCourse: boolean = false;
  mathshowCourse: boolean = false;
  javashowCourse: boolean = false;
  jsshowCourse: boolean = false;
  htmlshowCourse: boolean = false;
  cssshowCourse: boolean = false;

  // for assesment score
  p: number = 0;
  c: number = 0;
  m: number = 0;
  j: number = 0;
  js: number = 0;
  h: number = 0;
  cs: number = 0;

  // for courses score
  cp: number = 0;
  cc: number = 0;
  cm: number = 0;
  cj: number = 0;
  cjs: number = 0;
  ch: number = 0;
  ccs: number = 0;
  constructor() { }
}
