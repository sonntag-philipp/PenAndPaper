import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameHeadComponent } from './game-head.component';

describe('GameHeadComponent', () => {
  let component: GameHeadComponent;
  let fixture: ComponentFixture<GameHeadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameHeadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameHeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
