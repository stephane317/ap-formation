import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cat-update-page',
  templateUrl: './cat-update-page.component.html',
  styleUrls: ['./cat-update-page.component.css']
})
export class CatUpdatePageComponent implements OnInit {

  catId: number;

  constructor(
    private route: ActivatedRoute
  ) {
    this.catId = this.route.snapshot.params.toto;
  }

  ngOnInit() {
    console.log('----> this.cat', this.catId);
    this.loadData();
  }
  loadData(): any {
    console.log('-----> API CALL HTTP');
  }

  updateCat(data) {
    console.log('----> updateCat', data);
  }

}
