import { Component, OnInit } from '@angular/core';
const BUILD = 10;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit() {
    console.log('build = ' + BUILD);
  }

}
