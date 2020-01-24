import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { DataService } from './services/data.service';

@Injectable()
export class GithubFollowersService extends DataService {
  constructor(http: Http) {
    super('https://api.github.com/users/mosh-hamedani/followers', http);
  }
}
