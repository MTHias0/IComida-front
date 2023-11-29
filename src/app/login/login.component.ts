import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
// import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authenticationService: AuthService,
    // private router: Router
  ) {}

  public email: string = '';
  public password: string = '';

  public onSubmit(){
    // this.router.navigate(['./home'])
    // try{
    //   this.authenticationService.login(this.email, this.password)

    // } catch (err) {
    // }
  }

}
