import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { from, Observable, throwError } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { catchError } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { unauthorizedAccessAction } from '../../store/actions/user.actions';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService, private store: Store) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    /** set content header */
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }

    return from(this.handle(request, next));
  }

  async handle(req: HttpRequest<any>, next: HttpHandler) {
    // if your getAuthToken() function declared as "async getAuthToken() {}"
    const token = await this.authService.tokenValue.toPromise();

    // if your getAuthToken() function declared to return an observable then you can use
    // await this.auth.getAuthToken().toPromise()
    const authReq = req.clone({
      headers: req.headers.set('Authorization', `Bearer ${token}`),
    });

    // Important: Note the .toPromise()
    return next
      .handle(authReq)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 401) {
            this.store.dispatch(unauthorizedAccessAction());
          }
          return throwError(error);
        })
      )
      .toPromise();
  }
}
