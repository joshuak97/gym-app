import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NuevoWorkoutPage } from './nuevo-workout.page';

describe('NuevoWorkoutPage', () => {
  let component: NuevoWorkoutPage;
  let fixture: ComponentFixture<NuevoWorkoutPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoWorkoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NuevoWorkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
