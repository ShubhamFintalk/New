import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<firebase.User>;

  constructor(
  public afAuth: AngularFireAuth,
  public router: Router) { }

  //signup(){
  //this.afAuth.auth.createUser(firstName,lastName,companyName,email,password,address,dob).then
 // (value=> {
  //console.log('Success!', value);
  //this.router.navigate(['']);
  //}
  //.catch()
}


