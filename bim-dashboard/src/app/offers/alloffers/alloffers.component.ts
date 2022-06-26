import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ScriptsLoaderService} from '../../scripts-loader.service';
import {ListViewLoaderService} from '../../list-view-loader.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AllOffersHttpService} from './alloffers-requests-http.service';
import {ToastService} from '../../shared/services/toast.service';
import {Offer} from '../../shared/models/offer.model';

@Component({
  selector: 'app-alloffers',
  templateUrl: './alloffers.component.html',
  styleUrls: ['./alloffers.component.css']
})
export class AllOffersComponent implements OnInit {


  OffersList: any;

  selectedElementIndex = 0;
  OfferArray: Offer[] = [];

  constructor(private scriptsLoaderService: ScriptsLoaderService,
    private listViewLoaderService: ListViewLoaderService,
    private httpRequest: AllOffersHttpService,
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
