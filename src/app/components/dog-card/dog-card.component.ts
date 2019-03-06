import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/interface/animal.interface';

@Component({
  selector: 'app-dog-card',
  templateUrl: './dog-card.component.html',
  styleUrls: ['./dog-card.component.css']
})
export class DogCardComponent implements OnInit {

  @Input() dog: Animal;
  @Output() talkEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(' ngOnInit ----> DogCardComponent')
  }

  ngOnChanges(changes): void {
    console.log(' ngOnChanges ----> DogCardComponent');
    console.log(changes);
    console.log('dog', this.dog);
  }

  wantToTalk() {
    this.talkEvent.emit(this.dog.talk);
  }

}
