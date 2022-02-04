import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CalendarioWorkoutPage } from './calendario-workout.page';

describe('CalendarioWorkoutPage', () => {
  let component: CalendarioWorkoutPage;
  let fixture: ComponentFixture<CalendarioWorkoutPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CalendarioWorkoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CalendarioWorkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
