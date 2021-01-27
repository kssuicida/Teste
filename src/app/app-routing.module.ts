import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Pagina01Component } from './pagina01/pagina01.component';
import { Pagina02Component } from './pagina02/pagina02.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UpdateComponent } from './users/update/update.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path: 'pagina01' , component: Pagina01Component },
  {path: 'pagina02' , component: Pagina02Component },
  {path: 'users' , component: UsersComponent },
  {path: 'users/create' , component: CreateUserComponent },
  {path: 'users/update/:id' , component: UpdateComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
