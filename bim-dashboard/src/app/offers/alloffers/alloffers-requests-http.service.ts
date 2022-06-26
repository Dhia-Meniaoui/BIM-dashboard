import {Injectable} from '@angular/core';
import {HostUrlService} from '../../shared/services/host-url.service';
import {HttpClient} from '@angular/common/http';
import {Offer} from '../../shared/models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class AllOffersHttpService {
  url = this.urlService.url;
  OffersArray: Offer[] = [];

  constructor(
    private urlService: HostUrlService,
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get(this.url + '/admin/offers');
  }

  deleteOffer(id: string) {
    return this.http.delete(this.url + '/partners/' + id);
  }
}
