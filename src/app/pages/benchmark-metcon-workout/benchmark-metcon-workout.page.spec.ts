import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BenchmarkMetconWorkoutPage } from './benchmark-metcon-workout.page';

describe('BenchmarkMetconWorkoutPage', () => {
  let component: BenchmarkMetconWorkoutPage;
  let fixture: ComponentFixture<BenchmarkMetconWorkoutPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BenchmarkMetconWorkoutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BenchmarkMetconWorkoutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
