import { CookieService } from 'ngx-cookie';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router, private cookieService: CookieService) { }

  ngOnInit() {
  }

  onSubmitLogin(value: any){
    this.loginService.login(value).subscribe(
      (response) => this.cookieService.putObject('pnp-login', value),
      (error) => console.log(error)
    );
    this.cookieService.putObject('pnp-login', value);
    this.router.navigate(['/dashboard/']);

  }

}
