import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameSkillsComponent } from './game-skills.component';

describe('GameSkillsComponent', () => {
  let component: GameSkillsComponent;
  let fixture: ComponentFixture<GameSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
