import { Component } from '@angular/core';
import { restaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent {

  constructor(private restaurantService: restaurantService, private router: Router) {}
  
  public email: string = '';
  public password: string = '';
  public name: string = '';
  public address: string = '';
  public telNumber: string = '';

  public async onSubmit() {
  try{
    await this.restaurantService.createRestaurant(this.email, this.name, this.password, this.address, this.telNumber).subscribe((response: any) => {
      alert('Conta criada com sucessi')
      this.router.navigate(['./login'])
    }, (error) => {
      alert('Erro ao cadastrar conta');
    })
  } catch (err) {
    console.log('conta errrad')
  }
  }
}
