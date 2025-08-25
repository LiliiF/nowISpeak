import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSobre } from './hero-sobre';

describe('HeroSobre', () => {
  let component: HeroSobre;
  let fixture: ComponentFixture<HeroSobre>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSobre]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSobre);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
