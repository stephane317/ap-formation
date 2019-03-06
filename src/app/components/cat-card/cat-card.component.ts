import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/interface/animal.interface';

@Component({
  selector: 'app-cat-card',
  templateUrl: './cat-card.component.html',
  styleUrls: ['./cat-card.component.css']
})
export class CatCardComponent implements OnInit {

  @Input() cat: Animal;
  @Output() talkEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(' ngOnInit ----> CatCardComponent')
  }

  ngOnChanges(changes): void {
    console.log(' ngOnChanges ----> CatCardComponent');
    console.log(changes);
    console.log('CAT', this.cat);
  }

  wantToTalk() {
    this.talkEvent.emit(this.cat.talk);
  }

}
