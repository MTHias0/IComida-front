import { Component } from '@angular/core';
import { user } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})


export class PerfilComponent {
  constructor(private router:Router) {}

  public users = user;

  public editMode: boolean = false;

  public editActive() {
    console.log(this.editMode)
    this.editMode = true;
    console.log(this.editMode)
  }

  public onCancel(){
    this.editMode = false;
    this
  }
}
