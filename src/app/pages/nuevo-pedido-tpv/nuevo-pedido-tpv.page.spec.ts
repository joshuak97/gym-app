import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoPedidoTpvPage } from './nuevo-pedido-tpv.page';

describe('NuevoPedidoTpvPage', () => {
  let component: NuevoPedidoTpvPage;
  let fixture: ComponentFixture<NuevoPedidoTpvPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPedidoTpvPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoPedidoTpvPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
