import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Animal } from 'src/app/interface/animal.interface';

@Component({
  selector: 'app-cat-edition',
  templateUrl: './cat-edition.component.html',
  styleUrls: ['./cat-edition.component.css']
})
export class CatEditionComponent implements OnInit {

  catForm: FormGroup;

  catNameControl: FormControl;

  @Output() saveEvent: EventEmitter<Animal> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.initControlName();
    this.listenInputChange();
  }
  initControlName(): any {
    this.catNameControl = this.fb.control('');
  }

  getInput() {
    console.log('----> value control cat name', this.catNameControl.value);
    console.log(this.catForm.value);
  }

  reset() {
    this.catNameControl.reset();
  }

  listenInputChange(): any {
    this.catNameControl.valueChanges.subscribe(data => {
      console.log('----> data', data);
    })
  }

  submitForm() {
    console.log('----> ', this.catForm.value);
    this.saveEvent.emit(this.catForm.value);
  }

  initForm(): any {
    this.catForm = this.fb.group({
      'name': [''],
      'breed': [''],
      'talk': [''],
      'id': ['']
    })

  }

}
