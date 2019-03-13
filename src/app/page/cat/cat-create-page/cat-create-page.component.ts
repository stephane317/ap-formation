import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cat-create-page',
  templateUrl: './cat-create-page.component.html',
  styleUrls: ['./cat-create-page.component.css']
})
export class CatCreatePageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  createCat(data) {
    console.log('----> cat', data);
  }

}
