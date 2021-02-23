import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  valores: number = 30;
  updateSetting(event) {
    this.valores = event.value; 
  }
  constructor() { }

  ngOnInit() {
  }

}