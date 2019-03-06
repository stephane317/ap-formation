import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RabbitCardComponent } from './rabbit-card.component';

describe('RabbitCardComponent', () => {
  let component: RabbitCardComponent;
  let fixture: ComponentFixture<RabbitCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RabbitCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RabbitCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
