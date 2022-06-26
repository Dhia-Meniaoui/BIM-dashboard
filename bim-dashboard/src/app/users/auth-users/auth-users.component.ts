import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ScriptsLoaderService} from '../../scripts-loader.service';
import {ListViewLoaderService} from '../../list-view-loader.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthUsersRequestsHttpService} from './auth-users-requests-http.service';
import {ToastService} from '../../shared/services/toast.service';
import {User} from '../../shared/models/user.model';

@Component({
  selector: 'app-auth-users',
  templateUrl: './auth-users.component.html',
  styleUrls: ['./auth-users.component.css']
})
export class AuthUsersComponent implements OnInit {


  UsersList: any;

  selectedElementIndex = 0;
  UserArray: User[] = [];

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
    this.UsersList = this.httpRequest.UsersArray;
    this.httpRequest.getAll().subscribe(agencies =>{
      this.UsersList = agencies;
      console.log(this.UsersList);
    });
  }


  getSelectedElement() {
    return this.UsersList[this.selectedElementIndex];
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


  deleteUser() { 
    this.httpRequest.deleteUser(this.getSelectedElement()._id).subscribe(val =>
      this.UsersList.splice(this.selectedElementIndex, 1)
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
