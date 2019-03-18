import { Injectable } from '@angular/core';
import { Animal } from 'src/app/interface/animal.interface';

@Injectable({
  providedIn: "root"
})
export class DataZooService {

  cats: Animal[] = [{
    breed: "tee1",
    id: 1,
    name: "cat1",
    talk: "talk"
  }, {
    breed: "tee2",
    id: 2,
    name: "cat2",
    talk: "talk"
  }, {
    breed: "tee3",
    id: 3,
    name: "cat3",
    talk: "talk"
  }]


  constructor() { }


  addCat(cat: Animal) {
    this.cats.push(cat);
  }

  deleteCat(catId: number) {
    // get index in array + spread on findindex
    // let catToDeleteIndex = this.cats.findIndex(({id}) => {
    //   if(id == catId){
    //     return true;
    //   } 
    //   return false;
    // });

    // return implicit + spread
    let catToDeleteIndex = this.cats.findIndex(({ id }) => id == catId);

    // check if the cat exsit in the array
    if (catToDeleteIndex !== -1) {
      this.cats.splice(catToDeleteIndex, 1);
    }
    console.log('---> this.cats after delete', this.cats);
  }

  updateCat(cat: Animal, catId: number) {
    let catToUpdateIndex = this.cats.findIndex((currentCat) => currentCat.id == catId);
    // check if the cat exsit in the array
    if (catToUpdateIndex !== -1) {
      // spread
      this.cats[catToUpdateIndex] = { ...cat };
      // es5
      // this.cats[catToUpdateIndex] = Object.assign({}, cat);
    }
    console.log('---> this.cats after update', this.cats);
  }


}
