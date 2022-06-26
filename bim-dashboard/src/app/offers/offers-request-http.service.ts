import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {HostUrlService} from '../shared/services/host-url.service';

@Injectable({
  providedIn: 'root'
})
export class OffersrequestsRequestHttpService {
  url = this.urlService.url;

  constructor(private http: HttpClient, private urlService: HostUrlService) {
  }


}


