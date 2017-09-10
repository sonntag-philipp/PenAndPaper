import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorSkillsComponent } from './creator-skills.component';

describe('CreatorSkillsComponent', () => {
  let component: CreatorSkillsComponent;
  let fixture: ComponentFixture<CreatorSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatorSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatorSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
