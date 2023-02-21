import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddmasComponent } from './addmas.component';

describe('AddmasComponent', () => {
  let component: AddmasComponent;
  let fixture: ComponentFixture<AddmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddmasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
