import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalsListPageComponent } from './animals-list-page.component';

describe('AnimalsListPageComponent', () => {
  let component: AnimalsListPageComponent;
  let fixture: ComponentFixture<AnimalsListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnimalsListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimalsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
