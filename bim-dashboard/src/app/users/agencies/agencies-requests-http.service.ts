import {Injectable} from '@angular/core';
import {HostUrlService} from '../../shared/services/host-url.service';
import {HttpClient} from '@angular/common/http';
import {Agencie} from '../../shared/models/agencie.model';

@Injectable({
  providedIn: 'root'
})
export class AgenciesRequestsHttpService {
  url = this.urlService.url;
  AgencieArray: Agencie[] = [];

  constructor(
    private urlService: HostUrlService,
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get(this.url + '/partners/all');
  }

  deleteAgencie(id: string) {
    return this.http.delete(this.url + '/partners/' + id);
  }
}
