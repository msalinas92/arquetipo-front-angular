import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ExampleService {
  private apiUrl: string = localStorage.getItem('apiurl');

  constructor(private http: HttpClient) {}

  public exampleCall() {
    return this.http
      .get<any>(`${this.apiUrl}lista`)
      .toPromise()
      .then(data => console.log(data));
  }    
}
