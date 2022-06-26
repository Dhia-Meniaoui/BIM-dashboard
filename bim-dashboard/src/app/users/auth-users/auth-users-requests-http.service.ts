import {Injectable} from '@angular/core';
import {HostUrlService} from '../../shared/services/host-url.service';
import {HttpClient} from '@angular/common/http';
import {User} from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthUsersRequestsHttpService {
  url = this.urlService.url;
  UsersArray: User[] = [];

  constructor(
    private urlService: HostUrlService,
    private http: HttpClient,
  ) { }

  getAll() {
    return this.http.get(this.url + '/admin/users');
  }

  deleteUser(id: string) {
    return this.http.delete(this.url + '/partners/' + id);
  }
}
