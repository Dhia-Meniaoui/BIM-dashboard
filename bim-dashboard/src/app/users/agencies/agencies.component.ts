import {Component, OnInit} from '@angular/core';
import {ListViewLoaderService} from '../../list-view-loader.service';
import {ToastService} from '../../shared/services/toast.service';
import {AgenciesRequestsHttpService} from './agencies-requests-http.service';
import {Agencie} from '../../shared/models/agencie.model';


@Component({
  selector: 'app-agencies',
  templateUrl: './agencies.component.html',
  styleUrls: ['./agencies.component.css']
})
export class AgenciesComponent implements OnInit {

  agenciesList: any;

  selectedElementIndex = 0;
  AgencieArray: Agencie[] = [];

  constructor(
    private listViewLoaderService: ListViewLoaderService,
    private httpRequest: AgenciesRequestsHttpService,
    private toaster: ToastService) {
  }

  ngOnInit(): void {
    // this way we guarantee that we load the scripts
    // every time we init this component and data is already fetched
    this.listViewLoaderService.loadDataListViewScript().then();
    this.listViewLoaderService.loadStylesheets();
    this.AgencieArray = this.httpRequest.AgencieArray;
    this.httpRequest.getAll().subscribe(agencies =>{
      this.agenciesList = agencies;
      console.log(this.agenciesList);
    });
  }

  getSelectedElement() {
    return this.agenciesList[this.selectedElementIndex];
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


  deleteAgencie() { 
    this.httpRequest.deleteAgencie(this.getSelectedElement()._id).subscribe(val =>
      this.agenciesList.splice(this.selectedElementIndex, 1)
    );
  }

}
