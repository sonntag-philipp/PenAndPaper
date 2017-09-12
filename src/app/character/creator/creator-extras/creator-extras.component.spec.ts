import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorExtrasComponent } from './creator-extras.component';

describe('CreatorExtrasComponent', () => {
  let component: CreatorExtrasComponent;
  let fixture: ComponentFixture<CreatorExtrasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorExtrasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorExtrasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
