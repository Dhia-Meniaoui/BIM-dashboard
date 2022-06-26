import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ScriptsLoaderService} from '../../scripts-loader.service';
import {ListViewLoaderService} from '../../list-view-loader.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthUsersRequestsHttpService} from './prediction-requests-requests-http.service';
import {ToastService} from '../../shared/services/toast.service';
import {Buy} from '../../shared/models/buy.model';
import {Offer} from '../../shared/models/offer.model';

@Component({
  selector: 'app-prediction-requests',
  templateUrl: './prediction-requests.component.html',
  styleUrls: ['./prediction-requests.component.css']
})
export class PredictionRequestsComponent implements OnInit {


  OffersList: any;

  selectedElementIndex = 0;
  selectedoffer : Buy;
  OfferArray: Buy[] = [];
  resultat = "ds" ;

  constructor(private scriptsLoaderService: ScriptsLoaderService,
    private listViewLoaderService: ListViewLoaderService,
    private httpRequest: AuthUsersRequestsHttpService,
    private toaster: ToastService) {
    this.loadStylesheets();
}

  ngOnInit(): void {
    // this way we guarantee that we load the scripts
    // every time we init this component and data is already fetched
    this.listViewLoaderService.loadDataListViewScript().then();
    this.listViewLoaderService.loadStylesheets();
    this.OffersList = this.httpRequest.OffersArray;
    this.httpRequest.getAll().subscribe(offers =>{
      this.OffersList = offers;
      console.log(this.OffersList);
    });
  }


  getSelectedElement() {
    return this.OffersList[this.selectedElementIndex];
  }

  listItemClicked(i: number) {
    this.selectedElementIndex = i;
    this.listViewLoaderService.fireEventEditClicked();
  }
  //
  // /*==================
  //   Http requests
  //   ==================*/
  //


  deleteOffer() { 
    this.httpRequest.deleteOffer(this.getSelectedElement()._id).subscribe(val =>
      this.OffersList.splice(this.selectedElementIndex, 1)
    );
  }

  predictanoffer() {
    this.selectedoffer= this.OffersList[this.selectedElementIndex];
    const data = {
      "area": this.selectedoffer.offer.House.Lodging.area,
      "room": this.selectedoffer.offer.House.room,
      "year": this.selectedoffer.offer.House.Lodging.Construction_year,
      "basement": this.selectedoffer.offer.House.basement,
      "fitted_kitchen": this.selectedoffer.offer.House.fitted_kitchen,
      "terrasse": this.selectedoffer.offer.House.terrasse,
      "equipment": this.selectedoffer.offer.House.equipment,
      "city": this.selectedoffer.offer.House.Lodging.location,
      "efficiency_class": this.selectedoffer.offer.House.efficiency_class,
      "Category": this.selectedoffer.offer.House.Lodging.Category,
      "model": this.selectedoffer.offer.House.Lodging.model
    }
    console.log(data);

    const res = this.httpRequest.sendprediction(data).subscribe(val => {console.log(val) ; this.resultat = JSON.stringify(val);});;
    console.log(res);
    
    
    
  }

  loadStylesheets(): void {
    this.scriptsLoaderService.addStylesheets(
      '/assets/vendors/css/tables/ag-grid/ag-grid.css',
      '/assets/vendors/css/tables/ag-grid/ag-theme-material.css',
      '/assets/css/pages/app-user.css',
      '/assets/css/pages/aggrid.css');
  }

  loadScripts(): void {
    this.scriptsLoaderService.addManyScriptsAsync(
      '/assets/vendors/js/tables/ag-grid/ag-grid-community.min.noStyle.js',
      '/assets/js/scripts/pages/app-user.js').then();
  }


}
