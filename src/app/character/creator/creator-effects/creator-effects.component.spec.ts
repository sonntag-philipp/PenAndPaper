import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorEffectsComponent } from './creator-effects.component';

describe('CreatorEffectsComponent', () => {
  let component: CreatorEffectsComponent;
  let fixture: ComponentFixture<CreatorEffectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorEffectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorEffectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
