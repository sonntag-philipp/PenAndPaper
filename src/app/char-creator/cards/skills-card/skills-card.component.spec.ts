import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsCardComponent } from './skills-card.component';

describe('SkillsCardComponent', () => {
  let component: SkillsCardComponent;
  let fixture: ComponentFixture<SkillsCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
