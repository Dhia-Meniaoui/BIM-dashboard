import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {UsersRoutingModule} from './users-routing.module';
import {UsersComponent} from '../../users/users.component';
import {AuthUsersComponent} from '../../users/auth-users/auth-users.component';
import {AgenciesComponent} from '../../users/agencies/agencies.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedComponentsModule} from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    UsersComponent,
    AuthUsersComponent,
    AgenciesComponent,
  ],
    imports: [
        CommonModule,
        UsersRoutingModule,
        ReactiveFormsModule,
        SharedComponentsModule
    ]
})
export class UsersModule { }
