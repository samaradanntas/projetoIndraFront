import { ClientUpdateComponent } from './components/client/client-update/client-update.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component'
import { ClientListComponent } from './components/client/client-list/client-list.component';
import { ClientCreateComponent } from './components/client/client-create/client-create.component';
import {ClientCrudComponent} from "./views/client-crud/client-crud.component";


const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"clientes",
    component: ClientListComponent
  },
  {
    path:"clientes/cadastrar",
    component: ClientCreateComponent
  },
  {
    path:"clientes/editar/:cpf",
    component: ClientUpdateComponent
  },
  {
    path:"crud",
    component: ClientCrudComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
