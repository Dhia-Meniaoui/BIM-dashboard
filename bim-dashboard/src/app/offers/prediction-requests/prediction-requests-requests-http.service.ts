import {Injectable} from '@angular/core';
import {HostUrlService} from '../../shared/services/host-url.service';
import {HttpClient} from '@angular/common/http';
import {Buy} from '../../shared/models/buy.model';

@Injectable({
  providedIn: 'root'
})
export class AuthUsersRequestsHttpService {
  url = this.urlService.url;
  OffersArray: Buy[] = [];

  constructor(
    private urlService: HostUrlService,
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get(this.url + '/admin/offersbuy');
  }

  deleteOffer(id: string) {
    return this.http.delete(this.url + '/partners/' + id);
  }
  sendprediction(data) {
    
    console.log("dhia"); 
    console.log(data);
    
    return this.http.post(this.url + '/admin/prediction' , {data});
  }
}