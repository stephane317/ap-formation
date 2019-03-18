import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataZooService } from 'src/app/service/zoo/data-zoo.service';
import { Animal } from 'src/app/interface/animal.interface';

@Component({
  selector: 'app-cat-update-page',
  templateUrl: './cat-update-page.component.html',
  styleUrls: ['./cat-update-page.component.css']
})
export class CatUpdatePageComponent implements OnInit {

  catId: number;
  animal: Animal;

  constructor(
    private route: ActivatedRoute,
    private zooSrv: DataZooService
  ) {
    this.catId = this.route.snapshot.params.id;
  }

  ngOnInit() {
    console.log('----> this.cat', this.catId);
    this.loadData();
  }

  loadData(): any {
    console.log('-----> API CALL HTTP');
    this.animal = this.zooSrv.getById(this.catId);
    console.log('---> animal', this.animal);
  }

  updateCat(data) {
    console.log('----> updateCat', data);
    this.zooSrv.updateCat(data, this.catId);
    console.log('---> this.ca', this.zooSrv.cats);
  }

}
