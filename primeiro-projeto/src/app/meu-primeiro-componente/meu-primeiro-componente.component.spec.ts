import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeuPrimeiroComponenteComponent } from './meu-primeiro-componente.component';

describe('MeuPrimeiroComponenteComponent', () => {
  let component: MeuPrimeiroComponenteComponent;
  let fixture: ComponentFixture<MeuPrimeiroComponenteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MeuPrimeiroComponenteComponent]
    });
    fixture = TestBed.createComponent(MeuPrimeiroComponenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});