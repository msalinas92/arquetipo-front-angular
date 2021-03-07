import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { MainComponent } from "./main/main.component"; 

const routes: Routes = [
  { path: "", component: MainComponent},
  { path: "example", component: ExampleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
