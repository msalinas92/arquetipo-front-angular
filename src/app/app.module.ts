import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ExampleComponent } from './example/example.component';
import { AppService } from './app.service';
import { APP_INITIALIZER } from '@angular/core';

export const configFactory = (appService: AppService) => {
  return () => appService.loadConfig();
};

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: configFactory,
      deps: [AppService],
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
