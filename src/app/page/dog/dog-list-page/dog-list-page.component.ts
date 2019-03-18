import { Component, OnInit } from '@angular/core';
import { DataZooService } from 'src/app/service/zoo/data-zoo.service';

@Component({
  selector: 'app-dog-list-page',
  templateUrl: './dog-list-page.component.html',
  styleUrls: ['./dog-list-page.component.css'],
  providers: [DataZooService]
})
export class DogListPageComponent implements OnInit {

  constructor(
    private dataZooSrv: DataZooService
  ) { }

  ngOnInit() {
    console.log('---> modif git', this.dataZooSrv.cats);
  }

}
