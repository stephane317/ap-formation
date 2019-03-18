import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/interface/animal.interface';
import { DataZooService } from 'src/app/service/zoo/data-zoo.service';

@Component({
  selector: 'app-cat-create-page',
  templateUrl: './cat-create-page.component.html',
  styleUrls: ['./cat-create-page.component.css']
})
export class CatCreatePageComponent implements OnInit {

  constructor(
    private catSrv: DataZooService
  ) { }

  ngOnInit() {
  }

  createCat(newCat: Animal) {
    console.log('----> cat', newCat);
    this.catSrv.addCat(newCat);
    console.log('----> this cats', this.catSrv.cats);
  }

}
