import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map } from 'rxjs';
interface Endpoints {
  baseUrl: string;
  webSocketUrl: string;
}

@Injectable()
export class ConfigService {
  private endpoints = new BehaviorSubject<Endpoints | null>(null);
  readonly api$ = this.endpoints.asObservable().pipe(
    filter((endpoints) => !!endpoints),
    map((endpoints) => endpoints?.baseUrl)
  );
  constructor(private http: HttpClient) {}

  fetchEndpointmethods() {
    this.http.get<Endpoints>('assets/connectivity.json').subscribe({
      next: (endpoints) => this.endpoints.next(endpoints),
      error: () =>
        this.endpoints.next({
          baseUrl: 'sorry.com',
          webSocketUrl: 'sorry.com',
        }),
    });
  }
  get api() {
    return this.endpoints.getValue()?.baseUrl;
  }
  get webSocketUrl() {
    return this.endpoints.getValue()?.webSocketUrl;
  }
}
