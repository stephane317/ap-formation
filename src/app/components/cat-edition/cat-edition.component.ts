import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cat-edition',
  templateUrl: './cat-edition.component.html',
  styleUrls: ['./cat-edition.component.css']
})
export class CatEditionComponent implements OnInit {

  catForm: FormGroup;

  catNameControl: FormControl;

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




  initForm(): any {

    this.catForm = this.fb.group({
      'name': [''],
      'name1': [''],
      'name2': [''],
      'name3': ['']
    })

  }

}
