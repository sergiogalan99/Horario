import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EstudiosPage } from './estudios.page';

describe('EstudiosPage', () => {
  let component: EstudiosPage;
  let fixture: ComponentFixture<EstudiosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstudiosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EstudiosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
