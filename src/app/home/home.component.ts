import { Component } from '@angular/core';
import { products } from '../products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public products = products;
  
}
