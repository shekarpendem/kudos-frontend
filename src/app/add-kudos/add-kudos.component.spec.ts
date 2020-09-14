import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddKudosComponent } from './add-kudos.component';

describe('AddKudosComponent', () => {
  let component: AddKudosComponent;
  let fixture: ComponentFixture<AddKudosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddKudosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddKudosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
