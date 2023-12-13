import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ForgotComponent } from './forgot/forgot.component';
import { PerfilComponent } from './perfil/perfil.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'forgot',
    component: ForgotComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent 
  },
  {
    path: 'food',
    component: FoodComponent 
  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
