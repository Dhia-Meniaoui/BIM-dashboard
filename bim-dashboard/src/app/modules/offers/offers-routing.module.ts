import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllOffersComponent} from '../../offers/alloffers/alloffers.component';
import {PredictionRequestsComponent} from '../../offers/prediction-requests/prediction-requests.component';


const routes: Routes = [
  {path: 'Alloffers', component: AllOffersComponent},
  {path: 'prediction-requests', component: PredictionRequestsComponent},
  {path: ''  , redirectTo : 'Alloffers' , pathMatch : 'full'},
  {path: '**'  , redirectTo : 'Alloffers'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OffersRoutingModule {
}
