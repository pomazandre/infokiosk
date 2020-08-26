import { Injectable } from '@angular/core';
import { Person } from './person.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
class PersonsService {
  caption: string;
  url: string;

  constructor(private _httpClient: HttpClient) {
  }

  get(): any {
    return this._httpClient.get(this.url);
  }

}

export { PersonsService };
