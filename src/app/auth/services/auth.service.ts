import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserInterface } from '../../_models/user.interface';
import { UserResponseInterface } from '../../_models/user.response.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private static usersApi = '/api/users';
  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<UserResponseInterface> {
    return this.http.post<UserResponseInterface>(`${AuthService.usersApi}/login`, { email, password });
  }

  public logout() {}

  public signIn(name: string, email: string, password: string): Observable<UserResponseInterface> {
    return this.http.post<UserResponseInterface>(`${AuthService.usersApi}`, { name, email, password });
  }
}
