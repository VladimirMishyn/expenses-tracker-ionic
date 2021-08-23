import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageService } from '../../services/storage.service';
import { UserInterface } from '../../_models/user.interface';
import { UserResponseInterface } from '../../_models/user.response.interface';
import { AUTH_STORAGE_KEY } from '../_constants/auth.constants';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private static usersApi = '/api/users';
  constructor(private http: HttpClient, private storageService: StorageService) {}

  get userHasToken(): Observable<boolean> {
    return this.storageService.get(AUTH_STORAGE_KEY).pipe(map((token) => !!token));
  }

  get tokenValue(): Observable<string> {
    return this.storageService.get<string>(AUTH_STORAGE_KEY);
  }

  set token(token: string) {
    this.storageService.set(AUTH_STORAGE_KEY, token);
  }

  public removeToken() {
    return this.storageService.remove(AUTH_STORAGE_KEY);
  }

  public login(email: string, password: string): Observable<UserResponseInterface> {
    return this.http.post<UserResponseInterface>(`${AuthService.usersApi}/login`, { email, password });
  }

  public logout() {
    return this.http.post(`${AuthService.usersApi}/logout`, {});
  }

  public signIn(name: string, email: string, password: string): Observable<UserResponseInterface> {
    return this.http.post<UserResponseInterface>(`${AuthService.usersApi}`, { name, email, password });
  }

  public getUser(): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${AuthService.usersApi}/me`);
  }
}
