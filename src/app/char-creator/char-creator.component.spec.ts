import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharCreatorComponent } from './char-creator.component';

describe('CharCreatorComponent', () => {
  let component: CharCreatorComponent;
  let fixture: ComponentFixture<CharCreatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharCreatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharCreatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
