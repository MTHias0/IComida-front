import { Component } from '@angular/core';
import { restaurantService } from '../services/restaurant.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent {

  constructor(private restaurantService: restaurantService, private router: Router){}

  public itemName: string = '';
  public price: string = '';
  public role: string = '';

  public async onSubmit(){
    try{
      await this.restaurantService.addFood(this.itemName, this.price, this.role ).subscribe((response: any) => {
        alert('Conta criada com sucessi')
        this.router.navigate(['./home'])
      }, (error) => {
        alert('Erro ao adicionar prato');
      })
    } catch (err) {
      console.log('conta errrad')
    }
  }
}
