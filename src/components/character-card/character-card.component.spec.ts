import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterCardComponent } from './character-card.component';
import { characterMock } from '../../mocks/character.mock';

describe('CharacterCardComponent', () => {
  let component: CharacterCardComponent;
  let fixture: ComponentFixture<CharacterCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterCardComponent);
    component = fixture.componentInstance;
    component.character = characterMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
