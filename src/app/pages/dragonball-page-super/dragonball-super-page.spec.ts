import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballSuperPage } from './dragonball-super-page';
import { DragonballPage } from '../dragonball-page/dragonball-page';

describe('DragonballPage', () => {
  let component: DragonballPage;
  let fixture: ComponentFixture<DragonballPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonballPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonballPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
