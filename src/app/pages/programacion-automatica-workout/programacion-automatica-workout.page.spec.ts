import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ProgramacionAutomaticaWorkoutPage } from './programacion-automatica-workout.page';

describe('ProgramacionAutomaticaWorkoutPage', () => {
  let component: ProgramacionAutomaticaWorkoutPage;
  let fixture: ComponentFixture<ProgramacionAutomaticaWorkoutPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgramacionAutomaticaWorkoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ProgramacionAutomaticaWorkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
