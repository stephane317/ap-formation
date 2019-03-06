import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from 'src/app/interface/animal.interface';

@Component({
  selector: 'app-rabbit-card',
  templateUrl: './rabbit-card.component.html',
  styleUrls: ['./rabbit-card.component.css']
})
export class RabbitCardComponent implements OnInit {

  @Input() rabbit: Animal;
  @Output() talkEvent: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(' ngOnInit ----> RabbitCardComponent')
  }

  ngOnChanges(changes): void {
    console.log(' ngOnChanges ----> RabbitCardComponent');
    console.log(changes);
    console.log('rabbit', this.rabbit);
  }

  wantToTalk() {
    this.talkEvent.emit(this.rabbit.talk);
  }

}
