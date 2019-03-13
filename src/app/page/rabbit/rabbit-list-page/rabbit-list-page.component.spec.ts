import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbitListPageComponent } from './rabbit-list-page.component';

describe('RabbitListPageComponent', () => {
  let component: RabbitListPageComponent;
  let fixture: ComponentFixture<RabbitListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabbitListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabbitListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
