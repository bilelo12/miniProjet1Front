import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mesJoueurs';

  constructor(private router :Router,public authService :AuthService){


  }
  ngOnInit () {
    let isloggedin: string;
    let loggedUser:string;
    isloggedin = JSON.parse( localStorage.getItem('isloggedIn')||'{}');
    loggedUser = JSON.parse( localStorage.getItem('loggedUser') ||'{}'); 
    if (isloggedin!="true" || !loggedUser)
    this.router.navigate(['/login']);
    else
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
    }
}
