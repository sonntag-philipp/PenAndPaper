import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameInventoryComponent } from './game-inventory.component';

describe('GameInventoryComponent', () => {
  let component: GameInventoryComponent;
  let fixture: ComponentFixture<GameInventoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameInventoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
