import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {OffersRoutingModule} from './offers-routing.module';
import {OffersComponent} from '../../offers/offers.component';
import {AllOffersComponent} from '../../offers/alloffers/alloffers.component';
import {PredictionRequestsComponent} from '../../offers/prediction-requests/prediction-requests.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import {SharedComponentsModule} from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    OffersComponent,
    AllOffersComponent,
    PredictionRequestsComponent
  ],
    imports: [
        CommonModule,
        OffersRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxDropzoneModule,
        SharedComponentsModule
    ]
})
export class OffersModule {
}
