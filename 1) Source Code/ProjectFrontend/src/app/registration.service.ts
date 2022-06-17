import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  baseUrl = "http://localhost:8095/registeruser"
  baseUrl2 = "http://localhost:8095/login"
  baseUrl3 = "http://localhost:8095/name"
  baseUrl4 = "http://localhost:8095/password"
  baseUrl5 = "http://localhost:8095/mobile"
  constructor(private HttpClient: HttpClient) { }
  session: boolean = false;
  score: number = 0;
  cscore: number = 0;
  studentregister(student: Student): Observable<object> {
    return this.HttpClient.post(`${this.baseUrl}`, student)
  }
  studentlogin(student: Student): Observable<object> {
    return this.HttpClient.post(`${this.baseUrl2}`, student)
  }
  nameupdate(emailid: string, student: Student): Observable<Object> {
    return this.HttpClient.put(`${this.baseUrl3}/${emailid}`, student)
  }
  passwordupdate(emailid: string, student: Student): Observable<Object> {
    return this.HttpClient.put(`${this.baseUrl4}/${emailid}`, student)
  }
  mobileupdate(emailid: string, student: Student): Observable<Object> {
    return this.HttpClient.put(`${this.baseUrl5}/${emailid}`, student)
  }
}
