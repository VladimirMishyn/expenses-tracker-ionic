import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { filter, first, tap } from 'rxjs/operators';
import { getUser } from '../store/actions/user.actions';
import { selectUserisLoaded } from '../store/selectors/user.selectos';

@Injectable({
  providedIn: 'root',
})
export class UserResolver implements Resolve<boolean> {
  constructor(private store: Store) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.store.select(selectUserisLoaded).pipe(
      tap((userIsLoaded) => {
        if (!userIsLoaded) {
          this.store.dispatch(getUser());
        }
      }),
      filter((userIsLoaded) => userIsLoaded),
      first()
    );
  }
}
