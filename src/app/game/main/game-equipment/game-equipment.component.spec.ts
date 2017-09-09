import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameEquippedComponent } from './game-equipped.component';

describe('GameEquippedComponent', () => {
  let component: GameEquippedComponent;
  let fixture: ComponentFixture<GameEquippedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameEquippedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameEquippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
