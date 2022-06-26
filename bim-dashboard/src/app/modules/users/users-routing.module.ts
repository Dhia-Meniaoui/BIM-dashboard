import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthUsersComponent} from '../../users/auth-users/auth-users.component';
import {AgenciesComponent} from '../../users/agencies/agencies.component';


const routes: Routes = [
  {path : 'users' , component : AuthUsersComponent},
  {path : 'agencies' , component : AgenciesComponent},
  {path : '' , redirectTo : 'users' , pathMatch : 'full'},
  {path : '**' , redirectTo : 'users'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
