import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private storageContainer: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    this.storageContainer = await this.storage.create();
  }

  // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this.storageContainer?.set(key, JSON.stringify(value));
  }

  public get<T>(key: string): Observable<T> {
    return from(this.storageContainer?.get(key)).pipe(map((value) => JSON.parse(value)));
  }

  public remove(key: string) {
    return from(this.storageContainer?.remove(key));
  }
}
