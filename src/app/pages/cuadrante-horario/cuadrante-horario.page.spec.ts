import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CuadranteHorarioPage } from './cuadrante-horario.page';

describe('CuadranteHorarioPage', () => {
  let component: CuadranteHorarioPage;
  let fixture: ComponentFixture<CuadranteHorarioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuadranteHorarioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CuadranteHorarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
