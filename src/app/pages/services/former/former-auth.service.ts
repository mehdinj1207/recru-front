import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Role } from '../../model/role';
import { Former } from '../../model/former';

@Injectable({
  providedIn: 'root'
})
export class FormerAuthService {
 
  constructor(private router:Router) { }
public loggedUser!:string;
public loggedEmail!:string;

  //public isloggedInF: Boolean = false;
  public isloggedIn: Boolean = false;
  public roles!:Role[];


  public setRoles(roles: []) {
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(): [] {
    return JSON.parse(localStorage.getItem('roles')!);
  }

  public setToken(jwtToken: string) {
    localStorage.setItem('jwtToken', jwtToken);
  }

  public getToken(): string {
    return localStorage.getItem('jwtToken')!;
  }

  public clear() {
    localStorage.clear();
  }

  public isLoggedInF() {
    return this.getRoles() && this.getToken();
  }
  signInF(former:Former){
    this.loggedEmail= former.userEmail;
    this.loggedUser= former.userName;
   // this.isloggedInF = true;
   this.isloggedIn = true;
    this.roles = former.roles;

    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('loggedEmail',this.loggedEmail);
    //localStorage.setItem('isloggedInF',String(this.isloggedInF));
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    console.log(this.loggedUser);
 }

    setLoggedUserFromLocalStorageF(login : string) {
   
      this.loggedUser= login;
      //this.isloggedInF = true;
      this.isloggedIn= true;
      this.getRoles();
      }
      
      public logoutF() {
       //
      
 
       this.clear();
       
    
        this.router.navigate(['/home']);
      }
}