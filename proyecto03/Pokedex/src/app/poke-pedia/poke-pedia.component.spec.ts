import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokePediaComponent } from './poke-pedia.component';

describe('PokePediaComponent', () => {
  let component: PokePediaComponent;
  let fixture: ComponentFixture<PokePediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokePediaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PokePediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
