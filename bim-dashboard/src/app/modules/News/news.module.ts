import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {NewsRoutingModule} from './news-routing.module';
import {ArticlesComponent} from '../../articles/articles.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgxDropzoneModule} from 'ngx-dropzone';
import {SharedComponentsModule} from '../shared-components/shared-components.module';


@NgModule({
  declarations: [
    ArticlesComponent
  ],
    imports: [
        CommonModule,
        NewsRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        NgxDropzoneModule,
        SharedComponentsModule
    ]
})
export class NewsModule {
}
