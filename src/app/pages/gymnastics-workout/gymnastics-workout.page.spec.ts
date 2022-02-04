import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GymnasticsWorkoutPage } from './gymnastics-workout.page';

describe('GymnasticsWorkoutPage', () => {
  let component: GymnasticsWorkoutPage;
  let fixture: ComponentFixture<GymnasticsWorkoutPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ GymnasticsWorkoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GymnasticsWorkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
