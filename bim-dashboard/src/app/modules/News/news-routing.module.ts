import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ArticlesComponent} from '../../articles/articles.component';


const routes: Routes = [
  {path: '', component: ArticlesComponent, pathMatch: 'full'},
  {path: 'articles', component: ArticlesComponent},
  {path : '**' , redirectTo: 'articles'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule {
}
