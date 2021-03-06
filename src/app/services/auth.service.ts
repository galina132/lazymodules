import {Injectable} from '@angular/core';
import {HttpClient, HttpHandler, HttpParams, HttpHeaders} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {User} from '../user';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {
  }

  private loginSubjectSource = new BehaviorSubject(false);
  currentLoginState = this.loginSubjectSource.asObservable();
  userUrl = environment.userUrl;

  public login(userInfo: User) {
    const login = userInfo.login;
    const password = userInfo.password;
    const headers = new HttpHeaders()
      .set(
        login, login
      );
    const params = new HttpParams()
      .set(
        password, password
      );
    this.http.get(this.userUrl, {headers, params}).subscribe(() => {
      this.loginSubjectSource.next(true);
    }, (error) => error);
  }

}
