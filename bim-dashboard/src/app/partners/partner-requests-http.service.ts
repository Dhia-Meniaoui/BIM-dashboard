import {Injectable} from '@angular/core';
import {HostUrlService} from '../shared/services/host-url.service';
import {HttpClient} from '@angular/common/http';
import {Agencie} from '../shared/models/agencie.model';
import {ListViewLoaderService} from '../list-view-loader.service';

@Injectable({
  providedIn: 'root'
})
export class PartnerRequestsHttpService {
  url = this.urlService.url;
  AgencieArray: Agencie[] = [];

  constructor(
    private urlService: HostUrlService,
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get(this.url + '/partners/all');
  }

  validatePartner(id: string) {
    return this.http.put(this.url + '/partners/validate/', { id });
  }

  rejectPartner(id: string) {
    return this.http.put(this.url + '/partners/reject/', { id });
  }

  deletePartner(id: string) {
    return this.http.delete(this.url + '/partners/' + id);
  }
}
