import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterDetailComponent } from './character-detail.component';
import { characterMock } from '../../mocks/character.mock';

describe('CharacterDetailComponent', () => {
  let component: CharacterDetailComponent;
  let fixture: ComponentFixture<CharacterDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CharacterDetailComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CharacterDetailComponent);
    component = fixture.componentInstance;
    component.character = characterMock;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
