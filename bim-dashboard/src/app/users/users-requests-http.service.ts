import {Injectable} from '@angular/core';
import {HostUrlService} from '../shared/services/host-url.service';
import {HttpClient} from '@angular/common/http';
import {Agencie} from '../shared/models/agencie.model';
import {User} from '../shared/models/user.model';
import {ListViewLoaderService} from '../list-view-loader.service';

@Injectable({
  providedIn: 'root'
})
export class ClientRequestsHttpService {
  url = this.urlService.url;
  serviceRequestsArray: String[] = [];
  AgencieArray: Agencie[] = [];
  UserArray: User[] = [];
  // we are fetching 3 type of services requests , this variable below will be incremented
  // when a type fetched and will have the value of 3 when all of them is fetched
  requestsFetched = 0;

  constructor(private urlService: HostUrlService, private http: HttpClient, private listViewLoaderService: ListViewLoaderService) {
  }


  fetchAllUsers() {
    return this.http.get(this.url + '/admin/users');
  }






  sortArrayByDate() {
    if (this.requestsFetched >= 3) {
      // @ts-ignore
      this.serviceRequestsArray = this.serviceRequestsArray.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      this.listViewLoaderService.loadDataListViewScript().then();
      this.serviceRequestsArray.reverse();
    }
  }

  changeStatusTrainingSession(id: string, status: string) {
    return this.http.post(this.url + '/services/training/' + id, {status});
  }

  changeStatusMaintenance(id: string, status: string) {
    return this.http.post(this.url + '/services/maintenance/fixed/' + id, {status});
  }

  changeQualityControlStatus(id: string, status: string) {
    return this.http.post(this.url + '/services/qualityControl/' + id, {status});
  }

  deleteServiceRequest(id: string, type: string) {
    let route: string;
    switch (type) {
      case 'Training session' :
        route = 'training';
        break;
      case 'Maintenance' :
        route = 'maintenance';
        break;
      case 'Quality control' :
        route = 'qualityControl';
        break;
    }
    return this.http.delete(this.url + '/services/' + route + '/' + id);
  }


  banClient(email: string) {
    return this.http.post(this.url + '/banClient', {email});
  }
}
