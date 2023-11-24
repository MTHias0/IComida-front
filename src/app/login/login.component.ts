import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authenticationService: AuthService
  ) {}

  public email: string = '';
  public password: string = '';

  public onSubmit(){
    try{
      this.authenticationService.login(this.email, this.password)

    } catch (err) {
    }
  }

}
