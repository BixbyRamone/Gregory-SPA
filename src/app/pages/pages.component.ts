import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.css']
})
export class PagesComponent implements OnInit {
  @Input() pageNumber: number;

  constructor() { }

  ngOnInit() {
    console.log(this.pageNumber);
  }

}
