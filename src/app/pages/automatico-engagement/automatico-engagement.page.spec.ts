import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AutomaticoEngagementPage } from './automatico-engagement.page';

describe('AutomaticoEngagementPage', () => {
  let component: AutomaticoEngagementPage;
  let fixture: ComponentFixture<AutomaticoEngagementPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AutomaticoEngagementPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AutomaticoEngagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
