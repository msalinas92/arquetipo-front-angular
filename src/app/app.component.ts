import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(configService: AppService) {
    if(localStorage.getItem('apiurl') == null) {
      let apiUrl = configService.config.apiUrl;
      localStorage.setItem('apiurl', apiUrl);
    }
    console.log(`Se define API ${localStorage.getItem('apiurl')}`);
  }
  title = 'front-angular-arquetipo';
}
