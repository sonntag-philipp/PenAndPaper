import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EffectsCardComponent } from './effects-card.component';

describe('EffectsCardComponent', () => {
  let component: EffectsCardComponent;
  let fixture: ComponentFixture<EffectsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EffectsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EffectsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
