import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DragonballAdd } from './dragonball-add';

describe('DragonballAdd', () => {
  let component: DragonballAdd;
  let fixture: ComponentFixture<DragonballAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DragonballAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DragonballAdd);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
