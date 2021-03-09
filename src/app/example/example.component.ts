import { Component, OnInit } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {

  constructor(private example: ExampleService) {
    
  }


  llamarAPI(){
    this.example.exampleCall().then(data => {
      console.log(data);
    })
  }

  ngOnInit(): void { }

}
