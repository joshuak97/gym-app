import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CorreosEnviadosEngagementPage } from './correos-enviados-engagement.page';

describe('CorreosEnviadosEngagementPage', () => {
  let component: CorreosEnviadosEngagementPage;
  let fixture: ComponentFixture<CorreosEnviadosEngagementPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CorreosEnviadosEngagementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CorreosEnviadosEngagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
