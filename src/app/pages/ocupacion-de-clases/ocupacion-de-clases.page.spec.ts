import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OcupacionDeClasesPage } from './ocupacion-de-clases.page';

describe('FacturacionAdminPage', () => {
  let component: OcupacionDeClasesPage;
  let fixture: ComponentFixture<OcupacionDeClasesPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ OcupacionDeClasesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OcupacionDeClasesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
