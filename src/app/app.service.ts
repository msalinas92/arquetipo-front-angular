import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Config {
  apiUrl: string;
}


@Injectable({
  providedIn: 'root'
})
export class AppService {

  config: Config;
    
  constructor(private http: HttpClient) {}

  loadConfig() {
    return this.http
      .get<Config>('/assets/config.json')
      .toPromise()
      .then(config => {
        this.config = config;
      });
  }      
}
