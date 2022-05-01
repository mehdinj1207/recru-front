import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Center } from '../../model/center';
import { Role } from '../../model/role';

@Injectable({
  providedIn: 'root'
})
export class CenterAuthService {

  constructor(private router:Router) { }
  public loggedCenter!:string;
  public loggedUser!:string;
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

  public isLoggedInC() {
    return this.getRoles() && this.getToken();
  }
  signInC(center :Center){
    this.loggedCenter = center.userName;
    this.loggedUser= center.userName;
    //this.isloggedInC= true;
    this.isloggedIn= true;
    this.roles = center.roles;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    console.log(this.loggedCenter);
 }

    setLoggedUserFromLocalStorageC(login : string) {
      this.loggedCenter = login;
      //this.isloggedInC = true;
      this.loggedUser= login;
      this.isloggedIn= true;
      
      this.getRoles();
      }
      
      public logoutC() {
       //
      
 
       this.clear();
       
    
        this.router.navigate(['/home']);
      }
}