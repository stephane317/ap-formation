import { Component, OnInit } from '@angular/core';
import { Animal } from './interface/animal.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'zoo2';


  // 1 -> dog,
  // 2 -> cat,
  // 3 -> rabbit


  animals: Animal[] = [
    {
      name: "dog1",
      breed: "totobreed",
      talk: 'ouaf ouaf',
      type: 1
    },
    {
      name: "cat1",
      breed: "catbreed",
      talk: 'miaouw miaouw',
      type: 2
    },
    {
      name: "Rabbit1",
      breed: "rabbitbreed",
      talk: 'pan pan',
      type: 3
    }
  ]



  dogCount: number = 0;
  catCount: number = 0;
  rabbitCount: number = 0;


  constructor() { }


  ngOnInit() {
    console.log('----> AppComponent');
    this.initStats();
  }

  initStats(): any {
    // let arrayDogs = this.animals.filter(elem => elem.type === 1);
    this.dogCount = this.animals.filter(elem => elem.type === 1).length;
    this.catCount = this.animals.filter(elem => elem.type === 2).length;
    this.rabbitCount = this.animals.filter(elem => elem.type === 3).length;
  }

  animalWanToTalk(text: string) {
    alert(text);
  }

}
