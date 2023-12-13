import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private authenticationService: AuthService,
    private router: Router
  ) {}

  public email: string = '';
  public password: string = '';

  public async onSubmit(){
    try{
      await this.authenticationService.login(this.email, this.password).subscribe((response: any) => {
        this.router.navigate(['./home'])
      }, (error) => {
        alert('Usuário não cadastrado');
      })
    } catch (err) {
      console.log('conta errrad')
    }
  }

}
