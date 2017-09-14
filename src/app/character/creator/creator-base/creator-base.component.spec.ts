import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorBaseComponent } from './creator-base.component';

describe('CreatorBaseComponent', () => {
  let component: CreatorBaseComponent;
  let fixture: ComponentFixture<CreatorBaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorBaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
