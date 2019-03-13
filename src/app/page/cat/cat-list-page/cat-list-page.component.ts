import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interface/animal.interface';

@Component({
  selector: 'app-cat-list-page',
  templateUrl: './cat-list-page.component.html',
  styleUrls: ['./cat-list-page.component.css']
})
export class CatListPageComponent implements OnInit {

  cats: Animal[] = [
    {
      name: 'cat1',
      breed: 'ch',
      talk: 'miaou',
      id: 1
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
